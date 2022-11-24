import type { Application } from "express";
import { receitasRouter } from "./receitasRoutes.js";
import { despesasRouter } from "./despesasRoutes.js";

export const routes = (app: Application) => {
  app.use(receitasRouter);
  app.use(despesasRouter);
};
