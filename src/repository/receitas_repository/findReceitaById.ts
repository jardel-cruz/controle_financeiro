import { receitasModel } from "../../models/receitas.model.js";
import { findDocumentById } from "../repository.js";

export const findReceitaById = async (id: string) =>
  findDocumentById(id, receitasModel);
