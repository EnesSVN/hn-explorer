/* eslint-disable @typescript-eslint/no-explicit-any */
import "whatwg-fetch";
import { TextEncoder, TextDecoder } from "util";
import { TransformStream } from "web-streams-polyfill";
import { BroadcastChannel } from "broadcast-channel";

const g = globalThis as any;
if (typeof g.TextEncoder === "undefined") g.TextEncoder = TextEncoder;
if (typeof g.TextDecoder === "undefined") g.TextDecoder = TextDecoder as any;

if (typeof global.TransformStream === "undefined") {
  global.TransformStream = TransformStream;
}

(async () => {
  try {
    const { BroadcastChannel: NativeBroadcastChannel } = await import(
      "node:worker_threads"
    );
    if (
      typeof global.BroadcastChannel === "undefined" &&
      NativeBroadcastChannel
    ) {
      global.BroadcastChannel = NativeBroadcastChannel as any;
    }
  } catch (e) {}
})();
