// assumption: every sentence begins with date, ends with dot and eventually has a tralini new line character
const rule = /(\d{2}:\d{2}:\d{2}.+?\.\n?)/gm;

export const parser = (input: string): string[] => {
  const output: string[] = [];
  let captured: RegExpExecArray | null;

  while ((captured = rule.exec(input)) !== null) {
    output.push(captured[1]);
  }

  return output
};
