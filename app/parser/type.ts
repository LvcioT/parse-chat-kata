export enum Types {
  CUSTOMER = "customer", //DEFAULT
  AGENT = "agent",
}

let customerName: string | null = null;

export const init = () => customerName = null;

export const defaultType = (): Types => Object.values(Types)[0];

export const getType = (user: string): Types => {
  if (customerName) {
    if (customerName == user) {
      return Types.CUSTOMER;
    } else {
      return Types.AGENT;
    }
  } else {
    customerName = user;
    return Types.CUSTOMER;
  }
};
