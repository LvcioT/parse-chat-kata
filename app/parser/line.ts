import { Message } from "./index.ts";
import { getType } from "./type.ts";

const rule = /^(?<date>\d{2}:\d{2}:\d{2}) (?<user>.*) : (?<sentence>.*\n?)$/;

const mention = (date: string, user: string): string => `${date} ${user} : `;

export const parser = (input: string): Message | null => {
  const groups = rule.exec(input)?.groups;

  const date = groups?.date ?? "";
  const user = groups?.user ?? "";
  const sentence = groups?.sentence ?? "";

  if (date && user && sentence) {
    return {
      date: date,
      mention: mention(date, user),
      sentence: sentence,
      type: getType(user),
    };
  } else {
    return null;
  }
};
