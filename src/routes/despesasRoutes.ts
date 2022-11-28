import { Router } from "express";
import { addDespesasController } from "../controllers/despesas_controllers/addDespesasControllers.js";
import { deleteDespesasController } from "../controllers/despesas_controllers/deleteDespesasControllers.js";
import { listDespesasByMonthController } from "../controllers/despesas_controllers/listDespesasByMonthController.js";
import { listDespesasController } from "../controllers/despesas_controllers/listDespesasController.js";
import { updateDespesasController } from "../controllers/despesas_controllers/updateDespesasController.js";

const despesasRouter = Router({ caseSensitive: true });

despesasRouter
  .get("/despesas", listDespesasController)
  .get("/despesas/:id", listDespesasController)
  .get("/despesas/:year/:month", listDespesasByMonthController)
  .post("/despesas", addDespesasController)
  .put("/despesas/:id", updateDespesasController)
  .delete("/despesas/:id", deleteDespesasController);

export { despesasRouter };
