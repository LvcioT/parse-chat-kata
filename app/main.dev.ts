import { assertEquals, assert } from "./deps.dev.ts";

Deno.test("base test success", () => {
  assert(1);
});

Deno.test("base test fail", () => {
    assertEquals(1,2)
});
