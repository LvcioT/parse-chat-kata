import { parser } from "./parser.ts";

// simple wrapper for the corse parser
// just the first argument is parsed
console.log(parser(Deno.args[0] ?? ""));
