// deno-lint-ignore-file no-explicit-any

import { decodeBase58 } from "https://deno.land/std/encoding/base58.ts";
import { encodeHex } from "https://deno.land/std/encoding/hex.ts";
import * as ethUtil from "npm:@ethereumjs/util";

import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { Nostr } from "https://deno.land/x/nostr_deno_client/mod.ts";

import * as RawMessage from "./proto/messages/dephy/message/RawMessage.ts"
import * as SignedMessage from "./proto/messages/dephy/message/SignedMessage.ts"
import * as PbPayload from "./proto/messages/dephy/stpw/PbPayload.ts"

const DePhyMessageKind = 1111;

function getNostr() {
  const nostr = new Nostr();
  // nostr.debugMode = true;
  nostr.setMaxListeners(5);

  nostr.relayList.push({
    name: "Dephy",
    url: "wss://relay-poc.dephy.io",
  });

  // nostr.on(
  //   "relayConnected",
  //   (relay: Relay) => console.log("Relay connected.", relay.name),
  // );
  nostr.on("relayError", (err: Error) => {
    console.log("Relay error;", err);
    Deno.exit(1);
  });
  nostr.on("relayNotice", (notice: string[]) => {
    console.log("Notice", notice); // Probably not good news
    Deno.exit(1);
  });

  return nostr;
}

// const nostr = getNostr();
// await nostr.connect();

const savedSinceFilePath = "./tmp/oldest_message_timestamp";
let CreatedAtSince = (() => {
  const savedSince = (() => {
    try {
      const fromFile = parseInt(
        Deno.readTextFileSync(savedSinceFilePath).trim(),
      );
      return fromFile > 0 ? fromFile : 0;
    } catch (_e) {
      return 0;
    }
  })();
  if (savedSince > 0) {
    return savedSince;
  }

  const defaultSince = parseInt(Deno.env.get("CREATED_AT_SINCE") ?? "0");
  if (defaultSince > 0) {
    return defaultSince;
  }

  return undefined;
})();
let CreatedAtUntil;

do {
  // The NoStr seems has bug that leak subscriptions, we will disconnect after we get the result
  // await nostr.connect();

  const messages: any[] = [];
  do {
    console.log(
      `Fetching messages from ${CreatedAtSince ?? "oldest"} to ${CreatedAtUntil ?? "now"}`,
    );

    // The NoStr seems has bug that leak subscriptions, simply disconnect after we get the result
    const nostr = getNostr();
    await nostr.connect();

    // Fetch a batch, NoStr always DESC by `created_at`, so it will get messages from latest to oldest
    const messagesInBatch: any[] = [];
    await nostr.filter({
      kinds: [DePhyMessageKind],
      since: CreatedAtSince,
      until: CreatedAtUntil,
      limit: 100,
    }).each((message: any) => {
      // console.debug(message);
      // console.log(message.created_at);

      messages.push(message);
      messagesInBatch.push(message);
    });
    console.log(
      `Received ${messagesInBatch.length} messages in a batch, ${messages.length} messages in total`,
    );

    // The NoStr seems has bug that leak subscriptions, simply disconnect after we get the result
    nostr.disconnect();

    if (messagesInBatch.length === 0) {
      break;
    }

    CreatedAtUntil = messagesInBatch[messagesInBatch.length - 1].created_at - 1;
  } while (true);
  if (messages.length === 0) {
    console.log("No new message, sleep 60s");
    await sleep(60);
    continue;
  }

  console.log(`Received ${messages.length} messages in total`);
  // Make the order ASC by `created_at`
  messages.reverse();

  // TODO: Process messages here
  // This is a code sample, to show how to extract info from a NoStr message
  for (const message of messages) {
    // console.log(message);

    const decodedContent = SignedMessage.decodeBinary(decodeBase58(message.content));
    const rawMessage = RawMessage.decodeBinary(decodedContent.raw);
    
    const deviceEthAddress = `0x${encodeHex(rawMessage.fromAddress)}`;
    const payload = PbPayload.decodeBinary(rawMessage.payload);
    
    console.log(deviceEthAddress);
    console.log(payload);
    // Data example
    // 0x52fffd4ec1767c67fa60a29b7f151c6ace26aaf2
    // {
    //   currAvg: 22.04503631591797,
    //   voltAvg: 22.04503631591797,
    //   powerAvg: 22.04503631591797,
    //   pfAvg: 22.04503631591797,
    //   deltaEnerge: 22.04503631591797,
    //   highTemp: 22.04503631591797,
    //   bleMacList: [],
    //   wifiMacList: [],
    //   timestamp: "1699084895"
    // }
  }

  // Next iteration will end to newest in the batch
  CreatedAtSince = messages[messages.length - 1].created_at + 1;
  CreatedAtUntil = undefined;

  // Save cursor to disk
  // Deno.writeTextFileSync(savedSinceFilePath, (CreatedAtSince + 1).toString());
} while (true);
