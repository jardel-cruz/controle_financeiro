import bcrypt from "bcrypt";

export const createHashPassword = async (password: string) =>
  bcrypt.hash(password, 11);
