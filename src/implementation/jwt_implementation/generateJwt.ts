import { SignJWT } from "jose";
import { getEnvSecretKey } from "../../configs/envs-configs/getEnvSecretKey.js";
import type { IJwtPayload } from "../../types/jwtTypes.js";

const secretKey = await getEnvSecretKey();

export const generateJwt = async ({ id }: IJwtPayload, duration: number) =>
  new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(duration)
    .sign(Buffer.from(secretKey!));
