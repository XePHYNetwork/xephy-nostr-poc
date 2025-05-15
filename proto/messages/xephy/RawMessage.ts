// @ts-nocheck
import {
  Type as W3bstreamOptions,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./W3bstreamOptions.ts";
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
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.dephy.message {
  export type RawMessage = {
    timestamp: string;
    fromAddress: Uint8Array;
    toAddress: Uint8Array;
    encrypted: boolean;
    payload: Uint8Array;
    iv?: Uint8Array;
    w3b?: W3bstreamOptions;
  }
}

export type Type = $.dephy.message.RawMessage;

export function getDefaultValue(): $.dephy.message.RawMessage {
  return {
    timestamp: "0",
    fromAddress: new Uint8Array(),
    toAddress: new Uint8Array(),
    encrypted: false,
    payload: new Uint8Array(),
    iv: undefined,
    w3b: undefined,
  };
}

export function createValue(partialValue: Partial<$.dephy.message.RawMessage>): $.dephy.message.RawMessage {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.dephy.message.RawMessage): unknown {
  const result: any = {};
  if (value.timestamp !== undefined) result.timestamp = tsValueToJsonValueFns.uint64(value.timestamp);
  if (value.fromAddress !== undefined) result.fromAddress = tsValueToJsonValueFns.bytes(value.fromAddress);
  if (value.toAddress !== undefined) result.toAddress = tsValueToJsonValueFns.bytes(value.toAddress);
  if (value.encrypted !== undefined) result.encrypted = tsValueToJsonValueFns.bool(value.encrypted);
  if (value.payload !== undefined) result.payload = tsValueToJsonValueFns.bytes(value.payload);
  if (value.iv !== undefined) result.iv = tsValueToJsonValueFns.bytes(value.iv);
  if (value.w3b !== undefined) result.w3b = encodeJson_1(value.w3b);
  return result;
}

export function decodeJson(value: any): $.dephy.message.RawMessage {
  const result = getDefaultValue();
  if (value.timestamp !== undefined) result.timestamp = jsonValueToTsValueFns.uint64(value.timestamp);
  if (value.fromAddress !== undefined) result.fromAddress = jsonValueToTsValueFns.bytes(value.fromAddress);
  if (value.toAddress !== undefined) result.toAddress = jsonValueToTsValueFns.bytes(value.toAddress);
  if (value.encrypted !== undefined) result.encrypted = jsonValueToTsValueFns.bool(value.encrypted);
  if (value.payload !== undefined) result.payload = jsonValueToTsValueFns.bytes(value.payload);
  if (value.iv !== undefined) result.iv = jsonValueToTsValueFns.bytes(value.iv);
  if (value.w3b !== undefined) result.w3b = decodeJson_1(value.w3b);
  return result;
}

export function encodeBinary(value: $.dephy.message.RawMessage): Uint8Array {
  const result: WireMessage = [];
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.fromAddress !== undefined) {
    const tsValue = value.fromAddress;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.toAddress !== undefined) {
    const tsValue = value.toAddress;
    result.push(
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.encrypted !== undefined) {
    const tsValue = value.encrypted;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.payload !== undefined) {
    const tsValue = value.payload;
    result.push(
      [5, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.iv !== undefined) {
    const tsValue = value.iv;
    result.push(
      [6, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.w3b !== undefined) {
    const tsValue = value.w3b;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.dephy.message.RawMessage {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.fromAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.toAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.encrypted = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.payload = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.iv = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.w3b = value;
  }
  return result;
}
