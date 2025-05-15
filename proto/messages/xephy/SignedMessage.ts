// @ts-nocheck
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.dephy.message {
  export type SignedMessage = {
    raw: Uint8Array;
    hash: Uint8Array;
    nonce: string;
    signature: Uint8Array;
    lastEdgeAddr?: Uint8Array;
  }
}

export type Type = $.dephy.message.SignedMessage;

export function getDefaultValue(): $.dephy.message.SignedMessage {
  return {
    raw: new Uint8Array(),
    hash: new Uint8Array(),
    nonce: "0",
    signature: new Uint8Array(),
    lastEdgeAddr: undefined,
  };
}

export function createValue(partialValue: Partial<$.dephy.message.SignedMessage>): $.dephy.message.SignedMessage {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.dephy.message.SignedMessage): unknown {
  const result: any = {};
  if (value.raw !== undefined) result.raw = tsValueToJsonValueFns.bytes(value.raw);
  if (value.hash !== undefined) result.hash = tsValueToJsonValueFns.bytes(value.hash);
  if (value.nonce !== undefined) result.nonce = tsValueToJsonValueFns.uint64(value.nonce);
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.bytes(value.signature);
  if (value.lastEdgeAddr !== undefined) result.lastEdgeAddr = tsValueToJsonValueFns.bytes(value.lastEdgeAddr);
  return result;
}

export function decodeJson(value: any): $.dephy.message.SignedMessage {
  const result = getDefaultValue();
  if (value.raw !== undefined) result.raw = jsonValueToTsValueFns.bytes(value.raw);
  if (value.hash !== undefined) result.hash = jsonValueToTsValueFns.bytes(value.hash);
  if (value.nonce !== undefined) result.nonce = jsonValueToTsValueFns.uint64(value.nonce);
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.bytes(value.signature);
  if (value.lastEdgeAddr !== undefined) result.lastEdgeAddr = jsonValueToTsValueFns.bytes(value.lastEdgeAddr);
  return result;
}

export function encodeBinary(value: $.dephy.message.SignedMessage): Uint8Array {
  const result: WireMessage = [];
  if (value.raw !== undefined) {
    const tsValue = value.raw;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.hash !== undefined) {
    const tsValue = value.hash;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.nonce !== undefined) {
    const tsValue = value.nonce;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [4, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.lastEdgeAddr !== undefined) {
    const tsValue = value.lastEdgeAddr;
    result.push(
      [5, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.dephy.message.SignedMessage {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.raw = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.hash = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.nonce = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.lastEdgeAddr = value;
  }
  return result;
}
