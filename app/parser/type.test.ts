import { assertEquals } from "../deps.dev.ts";
import { defaultType, getType, init, Types } from "./type.ts";

const caseDefault: Types = Types.CUSTOMER;

Deno.test("default type", () => {
  const caseType: Types = defaultType();

  assertEquals(caseType, caseDefault);
});

Deno.test("type first is customer", () => {
  init();

  const caseType: Types = getType("Firstname Lastname");

  assertEquals(caseType, Types.CUSTOMER);
});

Deno.test("type other then first is agent", () => {
  init();

  getType("Firstname Lastname");
  const agent: Types = getType("Name Surname");

  assertEquals(agent, Types.AGENT);
});
