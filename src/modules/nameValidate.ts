export const nameValide = (name?: string) =>
  typeof name === "string" && name.length >= 3 && name.length < 100;
