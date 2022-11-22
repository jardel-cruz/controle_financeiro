import { Router } from "express";
import { addReceitaController } from "../controllers/receitas_controllers/addReceita.js";
import { listReceitas } from "../controllers/receitas_controllers/listReceitas.js";

const receitasRouter = Router({ caseSensitive: true });

receitasRouter
  .get("/receitas", listReceitas)
  .get("/receitas/:id", listReceitas)
  .post("/receitas", addReceitaController)
  .delete("/receitas");

export { receitasRouter };
