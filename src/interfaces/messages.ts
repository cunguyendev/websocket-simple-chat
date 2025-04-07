export type ClientInit = {
  type: string;
  clientId: string;
};

export type Message = {
  message: string;
  from: string;
  isYou?: boolean;
};
