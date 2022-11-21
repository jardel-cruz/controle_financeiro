import { getEnvs } from "./getEnv.js";

export const getEnvUsernameDb = async () => {
  const env = await getEnvs("USERNAME_DB");

  return typeof env === "string" ? env : undefined;
};
