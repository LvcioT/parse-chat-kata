import {Types, Message} from './index.ts'

const rule = /^(?<date>\d{2}:\d{2}:\d{2}) (?<user>.*) : (?<sentence>.*\n?)$/;

const getMention = (date: string, user: string): string => `${date} ${user} : `;

export const parser = (input: string): Message | null => {
  const emptyMessage: Message = {
    date: "",
    mention: "",
    sentence: "",
    type: Object.values(Types)[0],
  };

  const { date, user, sentence } = rule.exec(input)?.groups ?? emptyMessage;

  if (date && user && sentence) {
    return {
      date: date,
      mention: getMention(date, user),
      sentence: sentence,
      type: Object.values(Types)[0],
    };
  } else {
    return null;
  }
};
