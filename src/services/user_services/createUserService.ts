import { ICreateUser } from "../../types/userTypes.js";
import { validateUserData } from "../../modules/validateUserData.js";
import { generateJwt } from "../../implementation/jwt_implementation/generateJwt.js";
import { createHashPassword } from "../../implementation/hash_implementation/createHashPassword.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { registerUser } from "../../repository/user_repository/registerUser.js";
import { findUserByEmail } from "../../repository/user_repository/findUserByEmail.js";

export const createUserService = async ({
  email,
  name,
  password,
}: ICreateUser) => {
  if (!(await validateUserData({ email, name, password })))
    return triggerInvalidArgument("Os dados passados são inválidos");

  if (await findUserByEmail(email!))
    return triggerInvalidArgument("Esse email esta indisponível");

  const hashPassword = await createHashPassword(password!);
  const saveUser = await registerUser({
    email: email!,
    name: name!,
    password: hashPassword,
  });

  const jwt = saveUser
    ? await generateJwt({ id: saveUser }, genDuration())
    : triggerInvalidArgument("Os dados passados são inválidos");

  return jwt;
};

const genDuration = () => {
  const dateNow = new Date();
  const futureDate = `${dateNow.getFullYear()}/${dateNow.getMonth()}/${
    dateNow.getDay() + 1
  }`;

  return new Date(futureDate).getTime();
};
