import { Router } from "express";
import { addDespesasController } from "../controllers/despesas_controllers/addDespesasControllers.js";
import { deleteDespesasController } from "../controllers/despesas_controllers/deleteDespesasControllers.js";
import { listDespesasController } from "../controllers/despesas_controllers/listDespesasController.js";
import { updateDespesasController } from "../controllers/despesas_controllers/updateDespesasController.js";

const despesasRouter = Router({ caseSensitive: true, strict: true });

despesasRouter
  .get("/despesas", listDespesasController)
  .get("/despesas/:id", listDespesasController)
  .post("/despesas", addDespesasController)
  .put("/despesas/:id", updateDespesasController)
  .delete("/despesas/:id", deleteDespesasController);

export { despesasRouter };
