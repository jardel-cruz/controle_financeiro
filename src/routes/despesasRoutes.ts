import { Router } from "express";
import { addDespesasController } from "../controllers/despesas_controllers/addDespesasControllers.js";
import { deleteDespesasController } from "../controllers/despesas_controllers/deleteDespesasControllers.js";
import { listDespesasByMonthController } from "../controllers/despesas_controllers/listDespesasByMonthController.js";
import { listDespesasController } from "../controllers/despesas_controllers/listDespesasController.js";
import { updateDespesasController } from "../controllers/despesas_controllers/updateDespesasController.js";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.js";

const despesasRouter = Router({ caseSensitive: true });

despesasRouter
  .get("/despesas", authorizationMiddleware, listDespesasController)
  .get("/despesas/:id", authorizationMiddleware, listDespesasController)
  .get(
    "/despesas/:year/:month",
    authorizationMiddleware,
    listDespesasByMonthController
  )
  .post("/despesas", authorizationMiddleware, addDespesasController)
  .put("/despesas/:id", authorizationMiddleware, updateDespesasController)
  .delete("/despesas/:id", authorizationMiddleware, deleteDespesasController);

export { despesasRouter };
