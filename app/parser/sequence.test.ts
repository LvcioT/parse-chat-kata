import { cases } from "../cases.ts";
import { assertEquals } from "../deps.dev.ts";
import { parser } from "./sequence.ts";

Deno.test("empty string", () => {
  const output: string[] = parser("");

  assertEquals(output.length, 0);
});

Deno.test("line split count", () => {
  const output: string[] = parser(
    "11:11:11first.\n22:22:22second.33:33:33third.\n\n44:44:44last.",
  );

  assertEquals(output.length, 4);
});

Deno.test("usecase (ALL) linecount", () => {
  Object.values(cases).forEach((useCase) => {
    const output: string[] = parser(useCase.input)

    assertEquals(output.length, useCase.output.length)
  });
});
