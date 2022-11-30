export const passwordValide = (password?: string) =>
  typeof password === "string" && password.length >= 7;
