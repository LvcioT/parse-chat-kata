import { assertEquals } from "../deps.dev.ts";
import { parser } from "./sequence.ts";

Deno.test("empty string", () => {
  const output: string[] = parser("");

  assertEquals(output.length, 0);
});

Deno.test("line split count", () => {
  const output: string[] = parser("first\nsecond\n\nthird\nlast");

  assertEquals(output.length, 4);
});
