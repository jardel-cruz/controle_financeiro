import { ICreateUser } from "../../types/userTypes.js";

export const createUserService = async ({
  email,
  name,
  password,
}: ICreateUser) => {
  return { email, name, password };
};
