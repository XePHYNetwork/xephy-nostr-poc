// @ts-nocheck
import {
  Type as W3bstreamPayloadEncoding,
  name2num,
  num2name,
} from "./W3bstreamPayloadEncoding.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.ts";
import {
  default as Long,
} from "../../../runtime/Long.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.dephy.message {
  export type W3bstreamOptions = {
    topic: string;
    token: string;
    encoding: W3bstreamPayloadEncoding;
  }
}

export type Type = $.dephy.message.W3bstreamOptions;

export function getDefaultValue(): $.dephy.message.W3bstreamOptions {
  return {
    topic: "",
    token: "",
    encoding: "WPE_UTF8",
  };
}

export function createValue(partialValue: Partial<$.dephy.message.W3bstreamOptions>): $.dephy.message.W3bstreamOptions {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.dephy.message.W3bstreamOptions): unknown {
  const result: any = {};
  if (value.topic !== undefined) result.topic = tsValueToJsonValueFns.string(value.topic);
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.string(value.token);
  if (value.encoding !== undefined) result.encoding = tsValueToJsonValueFns.enum(value.encoding);
  return result;
}

export function decodeJson(value: any): $.dephy.message.W3bstreamOptions {
  const result = getDefaultValue();
  if (value.topic !== undefined) result.topic = jsonValueToTsValueFns.string(value.topic);
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.string(value.token);
  if (value.encoding !== undefined) result.encoding = jsonValueToTsValueFns.enum(value.encoding) as W3bstreamPayloadEncoding;
  return result;
}

export function encodeBinary(value: $.dephy.message.W3bstreamOptions): Uint8Array {
  const result: WireMessage = [];
  if (value.topic !== undefined) {
    const tsValue = value.topic;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token !== undefined) {
    const tsValue = value.token;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.encoding !== undefined) {
    const tsValue = value.encoding;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.dephy.message.W3bstreamOptions {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.topic = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.encoding = value;
  }
  return result;
}
