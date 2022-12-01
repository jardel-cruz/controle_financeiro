import { Router } from "express";
import { getResumo } from "../controllers/resumo_controllers/getResulmoController.js";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.js";

const resumoRouter = Router({ caseSensitive: true });

resumoRouter.get("/resumo/:year/:month", authorizationMiddleware, getResumo);

export { resumoRouter };
