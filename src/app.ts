import express, { Application } from "express";
import bodyParser from "body-parser";
import { db } from "./configs/database-configs/mongooseConfig.js";

export const appConfigs = () => {
  const app = express();

  dbConfig();
  bodyParserConfigs(app);

  return app;
};

const bodyParserConfigs = (app: Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

const dbConfig = () => {
  db.once("error", console.log.bind(console, "Error connect on Db"));
  db.on("open", () => console.log("Connected on Db"));
};
