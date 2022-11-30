export const emailValidate = (email?: string) =>
  typeof email === "string" &&
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(email);
