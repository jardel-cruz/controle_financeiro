import { getEnvs } from "./getEnv.js";

export const getEnvPasswordDb = async () => {
  const env = await getEnvs("PASSWORD_DB");

  return typeof env === "string" ? env : undefined;
};
