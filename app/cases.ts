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
  TwoSentences,
  TwoMentions,
  DateSplitting,
}

export const cases: { [key in CaseName]: Case } = [
  // single sentence
  {
    input:
      "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    output: [{
      date: "14:24:32",
      mention: "14:24:32 Customer : ",
      sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "customer",
    }],
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
  // two customer mentions as start
  {
    input:
      "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.\n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.",
    output: [{
      date: "14:24:32",
      mention: "14:24:32 Customer : ",
      sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
      type: "customer",
    }, {
      date: "14:27:00",
      mention: "14:27:00 Customer : ",
      sentence:
        "Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n",
      type: "customer",
    }, {
      date: "14:27:47",
      mention: "14:27:47 Agent : ",
      sentence: "Vestibulum tempor diam eu leo molestie eleifend.\n",
      type: "agent",
    }, {
      date: "14:28:28",
      mention: "14:28:28 Customer : ",
      sentence:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      type: "customer",
    }],
  },
  // dete splitting
  {
    input:
      "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.",
    output: [{
      date: "14:24:32",
      mention: "14:24:32 Customer : ",
      sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "customer",
    }, {
      date: "14:26:15",
      mention: "14:26:15 Agent : ",
      sentence: "Aliquam non cursus erat, ut blandit lectus.",
      type: "agent",
    }],
  },
];
