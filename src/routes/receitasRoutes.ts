import { Router } from "express";
import { addReceitaController } from "../controllers/receitas_controllers/addReceita.js";
import { deleteReceitas } from "../controllers/receitas_controllers/deleteReceitas.js";
import { listReceitas } from "../controllers/receitas_controllers/listReceitas.js";
import { listReceitasByMonthController } from "../controllers/receitas_controllers/listReceitasByMonthController.js";
import { updateReceitas } from "../controllers/receitas_controllers/updateReceitas.js";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.js";

const receitasRouter = Router({ caseSensitive: true });

receitasRouter
  .get("/receitas", authorizationMiddleware, listReceitas)
  .get("/receitas/:id", authorizationMiddleware, listReceitas)
  .get(
    "/receitas/:year/:month",
    authorizationMiddleware,
    listReceitasByMonthController
  )
  .post("/receitas", authorizationMiddleware, addReceitaController)
  .put("/receitas/:id", authorizationMiddleware, updateReceitas)
  .delete("/receitas/:id", authorizationMiddleware, deleteReceitas);

export { receitasRouter };
