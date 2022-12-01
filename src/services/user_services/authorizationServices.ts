import { triggerNotAuthorized } from "../../helpers/triggerErrors.js";
import { validateJwt } from "../../implementation/jwt_implementation/validateJwt.js";

export const authorizationService = async (token?: string) => {
  if (!token && !token?.startsWith("Bearer")) return triggerNotAuthorized();
  const [, t] = token.split(" ");
  const validate = await validateJwt(t);

  return validate ? validate.id : triggerNotAuthorized();
};
