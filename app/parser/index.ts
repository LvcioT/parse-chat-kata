import { parser as sequenceParser } from "./sequence.ts";
import { parser as lineParser } from "./line.ts";
import { getType, init as initTypes, Types } from "./type.ts";

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
  initTypes();
  
  const output: Message[] = [];
  const sequence: string[] = sequenceParser(input);

  sequence.forEach(function (line: string) {
    const message: Message | null = lineParser(line, getType);

    if (message) {
      output.push(message);
    }
  });

  return output;
};
