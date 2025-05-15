// @ts-nocheck
export declare namespace $.dephy.message {
  export type W3bstreamPayloadEncoding =
    | "WPE_UTF8"
    | "WPE_UTF8_JSON"
    | "WPE_HEX"
    | "WPE_BASE64";
}

export type Type = $.dephy.message.W3bstreamPayloadEncoding;

export const num2name = {
  0: "WPE_UTF8",
  1: "WPE_UTF8_JSON",
  2: "WPE_HEX",
  3: "WPE_BASE64",
} as const;

export const name2num = {
  WPE_UTF8: 0,
  WPE_UTF8_JSON: 1,
  WPE_HEX: 2,
  WPE_BASE64: 3,
} as const;
