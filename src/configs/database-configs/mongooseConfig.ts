import mongoose from "mongoose";
import { getEnvUsernameDb } from "../envs-configs/getEnvUsernameDb.js";
import { getEnvPasswordDb } from "../envs-configs/getEnvPasswordDb.js";

mongoose.set("strictQuery", true);

const [userDb, passwordDb] = [
	await getEnvUsernameDb(),
	await getEnvPasswordDb(),
];

mongoose.connect(
	`mongodb+srv://${userDb}:${passwordDb}@cluster0.deg56.mongodb.net/api-challenge`
);

export const db = mongoose.connection;
