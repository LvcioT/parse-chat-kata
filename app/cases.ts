// use just native types in order to assure test validity
export type Case = {
  input: string;
  output: {
    date: string;
    mention: string;
    sentence: string;
    type: "customer" | "agent";
  }[];
};

export enum CaseName {
  simple=0,
}

export const cases: Case[] = [
  // simple
  {
    input:
      "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    output: [
      {
        date: "14:24:32",
        mention: "14:24:32 Customer : ",
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "customer",
      },
    ],
  },
];
