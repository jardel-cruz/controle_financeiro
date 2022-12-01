import bcrypt from "bcrypt";

export const validatePasswordHash = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);
