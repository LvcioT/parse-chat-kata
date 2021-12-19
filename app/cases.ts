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
  SingleSententence = 0,
  TwoSentences = 1,
}

export const cases: Case[] = [
  // single sentence
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
  // two sentences
  {
    input:
      "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.",
    output: [{
      date: "14:24:32",
      mention: "14:24:32 Customer : ",
      sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
      type: "customer",
    }, {
      date: "14:26:15",
      mention: "14:26:15 Agent : ",
      sentence: "Aliquam non cursus erat, ut blandit lectus.",
      type: "agent",
    }],
  },
];
