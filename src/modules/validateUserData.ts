import { nameValide } from "./nameValidate.js";
import { emailValidate } from "./emailValidate.js";
import { passwordValide } from "./passwordValidate.js";
import type { ICreateUser } from "../types/userTypes.js";

export const validateUserData = async ({
  email,
  name,
  password,
}: ICreateUser) =>
  nameValide(name) && emailValidate(email) && passwordValide(password);
