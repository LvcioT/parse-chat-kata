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

const rule = /^(?<date>\d{2}:\d{2}:\d{2}) (?<user>.*) : (?<sentence>.*)/;

const getMention = (date: string, user: string): string => `${date} ${user} : `;

export const parser = (input: string): Message[] => {
  const emptyMessage: Message = {
    date: "",
    mention: "",
    sentence: "",
    type: Object.values(Types)[0],
  };

  const { date, user, sentence } = rule.exec(input)?.groups ?? emptyMessage;

  if (date && user && sentence) {
    return [{
      date: date,
      mention: getMention(date, user),
      sentence: sentence,
      type: Object.values(Types)[0],
    }];
  } else {
    return [];
  }
};
