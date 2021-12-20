export enum Types {
  CUSTOMER = "customer", //DEFAULT
  AGENT = "agent",
}

export const defaultType = (): Types => Object.values(Types)[0];

export const getType = (user: string): Types => {
  const keyType = user.toUpperCase() as keyof typeof Types;

  const retrieved: Types = Types[keyType];

  return retrieved ? retrieved : defaultType();
};
