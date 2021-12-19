import { assertEquals } from "../deps.dev.ts";
import { parser } from "./line.ts";
import { Message } from "./index.ts";
import { Case, CaseName, cases } from "../cases.ts";

Deno.test("empty string", () => {
  const output: Message | null = parser("");

  assertEquals(output, null);
});

Deno.test("random string not matching", () => {
  const output: Message| null = parser(
    "vlksns sdlv : sdjvsdnklskdnvsdvskv,s sdlk vdslkv slv s.",
  );

  assertEquals(output, null);
});

Deno.test("single matching sentence", () => {
  const useCase: Case = cases[CaseName.SingleSententence];
  const output: Message | null = parser(useCase.input);

  assertEquals(output, useCase.output[0]);
});
