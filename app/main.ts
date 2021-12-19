import { parser } from "./parser/index.ts";

// simple wrapper for the corse parser
// just the first argument is parsed
console.log(parser(Deno.args[0] ?? ""));
