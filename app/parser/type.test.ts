import { assertEquals } from "../deps.dev.ts";
import { defaultType, getType, Types } from "./type.ts";

const caseDefault: Types = Types.CUSTOMER

Deno.test("default type", () => {
  const caseType: Types = defaultType();

  assertEquals(caseType, caseDefault);
});

Deno.test("type by not valid value", () => {
    const caseType: Types = getType('unexisting_value');
  
    assertEquals(caseType, caseDefault);
  });
  

Deno.test("type by value", () => {
    // pick random type
    const values: string[] = Object.values(Types);
    const value: string = values[Math.floor(Math.random()*values.length)]

    const caseType: Types = getType(value)

    assertEquals(caseType, value)
})