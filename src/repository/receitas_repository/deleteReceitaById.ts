import { receitasModel } from "../../models/receitas.model.js";
import { deleteDocument } from "../repository.js";

export const deleteReceitaById = async (id: string) => {
  const document = await deleteDocument(id, receitasModel);

  return document;
};
