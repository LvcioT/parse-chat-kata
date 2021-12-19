import { parser as sequenceParser } from "./sequence.ts";
import { parser as lineParser } from "./line.ts";

export enum Types {
  customer = "customer",
  agent = "agent",
}

export type Message = {
  date: string;
  mention: string;
  sentence: string;
  type: Types;
};

/**
 * parse string into array of messages
 * simplification: just complete messages will be returned
 *
 * @param input string containing whole message sequence
 * @returns array of parsed messages
 */
export const parser = (input: string): Message[] => {
  const output: Message[] = [];
  const sequence: string[] = sequenceParser(input);

  sequence.forEach(function (line: string) {
    const message: Message | null = lineParser(line);

    if (message) {
      // set alternates type
      message.type = Object.values(Types)[output.length % 2];

      output.push(message);
    }
  });

  return output;
};
