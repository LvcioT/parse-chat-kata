import { Case, CaseName, cases } from "../cases.ts";
import { assertEquals } from "../deps.dev.ts";
import { Message, parser } from "./index.ts";

Deno.test("empty string", () => {
  const output: Message[] = parser("");

  assertEquals(output.length, 0);
});

Deno.test("random string not matching", () => {
  const output: Message[] = parser("first\nsecond\nthird");

  assertEquals(output.length, 0);
});

Deno.test("usecase 1: single sentence", () => {
  const useCase: Case = cases[CaseName.SingleSententence];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});

Deno.test("usecase 2: two sentences", () => {
  const useCase: Case = cases[CaseName.TwoSentences];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});

Deno.test("usecase 3: two customer mentions as start", () => {
  const useCase: Case = cases[CaseName.TwoMentions];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});

Deno.test("usecase 4: date splitting", () => {
  const useCase: Case = cases[CaseName.DateSplitting];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});

Deno.test("usecase 5: ignore extra dates", () => {
  const useCase: Case = cases[CaseName.ExtraDates];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});

Deno.test("usecase 6: full name", () => {
  const useCase: Case = cases[CaseName.FullName];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});