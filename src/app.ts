import express, { Application } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { db } from "./configs/database-configs/mongooseConfig.js";
import { routes } from "./routes/index.js";

export const appConfigs = () => {
  const app = express();

  dbConfig();
  bodyParserConfigs(app);
  helmetConfig(app);
  routes(app);

  return app;
};

const bodyParserConfigs = (app: Application) => {
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
};

const dbConfig = () => {
  db.once("error", console.log.bind(console, "Error connect on Db"));
  db.on("open", () => console.log("Connected on Db"));
};

const helmetConfig = (app: Application) => {
  app.use(async (req, res, next) => {
    req.params.userId = "";
    return next();
  });
  app.use(helmet());
};
