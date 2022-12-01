import { triggerNotAuthorized } from "../../helpers/triggerErrors.js";
import { generateJwt } from "../../implementation/jwt_implementation/generateJwt.js";
import { genDuration } from "../../modules/genDuration.js";

export const gnTokenJwtUserService = async (id?: string) => {
  if (!id) return triggerNotAuthorized("Token invalido");

  return generateJwt({ id }, genDuration());
};
