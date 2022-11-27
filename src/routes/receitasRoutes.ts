import { Router } from "express";
import { addReceitaController } from "../controllers/receitas_controllers/addReceita.js";
import { deleteReceitas } from "../controllers/receitas_controllers/deleteReceitas.js";
import { listReceitas } from "../controllers/receitas_controllers/listReceitas.js";
import { updateReceitas } from "../controllers/receitas_controllers/updateReceitas.js";

const receitasRouter = Router({ caseSensitive: true });

receitasRouter
  .get("/receitas", listReceitas)
  .get("/receitas/:id", listReceitas)
  .post("/receitas", addReceitaController)
  .put("/receitas/:id", updateReceitas)
  .delete("/receitas/:id", deleteReceitas);

export { receitasRouter };
