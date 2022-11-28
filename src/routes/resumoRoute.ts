import { Router } from "express";
import { getResumo } from "../controllers/resumo_controllers/getResulmoController.js";

const resumoRouter = Router({ caseSensitive: true });

resumoRouter.get("/resumo/:year/:month", getResumo);

export { resumoRouter };
