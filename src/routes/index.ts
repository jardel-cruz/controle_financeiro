import type { Application } from "express";
import { receitasRouter } from "./receitasRoutes.js";

export const routes = (app: Application) => {
  app.use(receitasRouter);
};
