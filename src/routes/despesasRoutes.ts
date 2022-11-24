import { Router } from "express";
import { addDespesasController } from "../controllers/despesas_controllers/addDespesasControllers.js";

const despesasRouter = Router({ caseSensitive: true, strict: true });

despesasRouter.post("/despesas", addDespesasController);

export { despesasRouter };
