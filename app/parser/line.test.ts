import { assertEquals } from "../deps.dev.ts";
import { parser } from "./line.ts";
import { Message } from "./index.ts";
import { Case, CaseName, cases } from "../cases.ts";
import { getType } from "./type.ts";

Deno.test("empty string", () => {
  const output: Message | null = parser("", getType);

  assertEquals(output, null);
});

Deno.test("random string not matching", () => {
  const output: Message | null = parser(
    "vlksns sdlv : sdjvsdnklskdnvsdvskv,s sdlk vdslkv slv s.",
    getType,
  );

  assertEquals(output, null);
});

Deno.test("single matching sentence", () => {
  const useCase: Case = cases[CaseName.SingleSententence];
  const output: Message | null = parser(useCase.input, getType);

  assertEquals(output, useCase.output[0]);
});
