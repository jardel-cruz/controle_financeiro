import { Router } from "express";
import { addReceitaController } from "../controllers/receitas_controllers/addReceita.js";

const receitasRouter = Router({ caseSensitive: true });

receitasRouter.post("/receitas", addReceitaController);

export { receitasRouter };
