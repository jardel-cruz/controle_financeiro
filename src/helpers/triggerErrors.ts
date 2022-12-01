import {
  IdNotFoundError,
  InvalidArgumentsError,
  NotAuthorized,
} from "./erros.js";

export const triggerInvalidArgument = (msg: string) => {
  throw new InvalidArgumentsError(msg);
};

export const triggerIdNotFound = () => {
  throw new IdNotFoundError("esse id não existe");
};

export const triggerNotAuthorized = (msg = "Erro ao logar") => {
  throw new NotAuthorized(msg);
};
