import { getEnvs } from "./getEnv.js";

export const getEnvPort = async () => {
  const env = await getEnvs("PORT");

  return typeof env === "number" ? env : undefined;
};
