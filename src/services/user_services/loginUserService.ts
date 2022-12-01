import { findUserByEmail } from "../../repository/user_repository/findUserByEmail.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { validatePasswordHash } from "../../implementation/hash_implementation/validatePasswordHash.js";

export const loginUserService = async ({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) => {
  if (!email || !password)
    return triggerInvalidArgument("Email ou senha inválidos");

  const user = await findUserByEmail(email);

  if (!user) return triggerInvalidArgument("Email ou senha inválidos");

  const result = await validatePasswordHash(password, user.password);

  return result ? (user.id as string) : undefined;
};
