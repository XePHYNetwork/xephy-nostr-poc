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

export declare namespace $.dephy.stpw {
  export type PbPayload = {
    currAvg: number;
    voltAvg: number;
    powerAvg: number;
    pfAvg: number;
    deltaEnerge: number;
    highTemp: number;
    bleMacList: Uint8Array[];
    wifiMacList: Uint8Array[];
    timestamp: string;
  }
}

export type Type = $.dephy.stpw.PbPayload;

export function getDefaultValue(): $.dephy.stpw.PbPayload {
  return {
    currAvg: 0,
    voltAvg: 0,
    powerAvg: 0,
    pfAvg: 0,
    deltaEnerge: 0,
    highTemp: 0,
    bleMacList: [],
    wifiMacList: [],
    timestamp: "0",
  };
}

export function createValue(partialValue: Partial<$.dephy.stpw.PbPayload>): $.dephy.stpw.PbPayload {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.dephy.stpw.PbPayload): unknown {
  const result: any = {};
  if (value.currAvg !== undefined) result.currAvg = tsValueToJsonValueFns.float(value.currAvg);
  if (value.voltAvg !== undefined) result.voltAvg = tsValueToJsonValueFns.float(value.voltAvg);
  if (value.powerAvg !== undefined) result.powerAvg = tsValueToJsonValueFns.float(value.powerAvg);
  if (value.pfAvg !== undefined) result.pfAvg = tsValueToJsonValueFns.float(value.pfAvg);
  if (value.deltaEnerge !== undefined) result.deltaEnerge = tsValueToJsonValueFns.float(value.deltaEnerge);
  if (value.highTemp !== undefined) result.highTemp = tsValueToJsonValueFns.float(value.highTemp);
  result.bleMacList = value.bleMacList.map(value => tsValueToJsonValueFns.bytes(value));
  result.wifiMacList = value.wifiMacList.map(value => tsValueToJsonValueFns.bytes(value));
  if (value.timestamp !== undefined) result.timestamp = tsValueToJsonValueFns.uint64(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.dephy.stpw.PbPayload {
  const result = getDefaultValue();
  if (value.currAvg !== undefined) result.currAvg = jsonValueToTsValueFns.float(value.currAvg);
  if (value.voltAvg !== undefined) result.voltAvg = jsonValueToTsValueFns.float(value.voltAvg);
  if (value.powerAvg !== undefined) result.powerAvg = jsonValueToTsValueFns.float(value.powerAvg);
  if (value.pfAvg !== undefined) result.pfAvg = jsonValueToTsValueFns.float(value.pfAvg);
  if (value.deltaEnerge !== undefined) result.deltaEnerge = jsonValueToTsValueFns.float(value.deltaEnerge);
  if (value.highTemp !== undefined) result.highTemp = jsonValueToTsValueFns.float(value.highTemp);
  result.bleMacList = value.bleMacList?.map((value: any) => jsonValueToTsValueFns.bytes(value)) ?? [];
  result.wifiMacList = value.wifiMacList?.map((value: any) => jsonValueToTsValueFns.bytes(value)) ?? [];
  if (value.timestamp !== undefined) result.timestamp = jsonValueToTsValueFns.uint64(value.timestamp);
  return result;
}

export function encodeBinary(value: $.dephy.stpw.PbPayload): Uint8Array {
  const result: WireMessage = [];
  if (value.currAvg !== undefined) {
    const tsValue = value.currAvg;
    result.push(
      [1, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.voltAvg !== undefined) {
    const tsValue = value.voltAvg;
    result.push(
      [2, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.powerAvg !== undefined) {
    const tsValue = value.powerAvg;
    result.push(
      [3, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.pfAvg !== undefined) {
    const tsValue = value.pfAvg;
    result.push(
      [4, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.deltaEnerge !== undefined) {
    const tsValue = value.deltaEnerge;
    result.push(
      [5, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.highTemp !== undefined) {
    const tsValue = value.highTemp;
    result.push(
      [6, tsValueToWireValueFns.float(tsValue)],
    );
  }
  for (const tsValue of value.bleMacList) {
    result.push(
      [7, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  for (const tsValue of value.wifiMacList) {
    result.push(
      [8, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [9, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.dephy.stpw.PbPayload {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.currAvg = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.voltAvg = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.powerAvg = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.pfAvg = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.deltaEnerge = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.highTemp = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.bytes(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bleMacList = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.bytes(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.wifiMacList = value as any;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
