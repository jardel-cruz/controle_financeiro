import dotenv from "dotenv";
dotenv.config();

export const getEnvs = async (key: string) => {
  const env = process.env[key];
  const envToNumber = Number(env);

  return envToNumber ? envToNumber : env;
};
