import { getEnvs } from "./getEnv.js";

export const getEnvSecretKey = async () => {
  const env = await getEnvs("PRIVATE_KEY");

  if (typeof env === "string") return env;
  else return undefined;
};
