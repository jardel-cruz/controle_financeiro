import { IdNotFoundError, InvalidArgumentsError } from "./erros.js";

export const triggerInvalidArgument = (msg: string) => {
  throw new InvalidArgumentsError(msg);
};

export const triggerIdNotFound = () => {
  throw new IdNotFoundError("esse id não existe");
};
