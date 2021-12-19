import { assertEquals } from "./deps.dev.ts";
import { Message, parser } from "./parser.ts";
import { Case, CaseName, cases } from "./cases.ts";

Deno.test("empty string", () => {
  const output: Message[] = parser("");

  assertEquals(output, []);
});

Deno.test("random string not matching", () => {
  const output: Message[] = parser(
    "vlksns sdlv : sdjvsdnklskdnvsdvskv,s sdlk vdslkv slv s.",
  );

  assertEquals(output, []);
});

Deno.test("simple string", () => {
  const useCase: Case = cases[CaseName.SingleSententence];
  const output: Message[] = parser(useCase.input);

  assertEquals(output, useCase.output);
});
