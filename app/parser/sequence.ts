const rule = /(.+\n?)/gm;

export const parser = (input: string): string[] => {
  const output: string[] = [];
  let captured: RegExpExecArray | null;

  while ((captured = rule.exec(input)) !== null) {
    output.push(captured[1]);
  }

  return output
};
