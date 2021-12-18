// simple test for Deno capabilities
import { assert, assertEquals } from "./deps.dev.ts";

// very simple test, ever successing
Deno.test("base test success", () => {
  assert(1);
});

/**
 * ever failing
 */
Deno.test({
  name: "base test fail",
  ignore: true,
  fn() {
    assertEquals(1, 2);
  },
});
