import type { Application } from "express";
import { receitasRouter } from "./receitasRoutes.js";
import { despesasRouter } from "./despesasRoutes.js";
import { resumoRouter } from "./resumoRoute.js";
import { userRouter } from "./userRoutes.js";
import { notFoundMiddleware } from "../middlewares/notFoundMiddleware.js";

export const routes = (app: Application) => {
  app.use(receitasRouter);
  app.use(despesasRouter);
  app.use(resumoRouter);
  app.use(userRouter);
  app.use(notFoundMiddleware);
};
