import { jwtVerify } from "jose";
import { getEnvSecretKey } from "../../configs/envs-configs/getEnvSecretKey.js";
import type { IJwtPayload } from "../../types/jwtTypes.js";

const secretKey = await getEnvSecretKey();

export const validateJwt = async (token: string) => {
  try {
    const result = (await jwtVerify(token, Buffer.from(secretKey!)))
      .payload as any as IJwtPayload;

    return result;
  } catch {
    return undefined;
  }
};
