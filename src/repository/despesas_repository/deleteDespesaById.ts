import { despesasModel } from "../../models/despesas.model.js";
import { deleteDocument } from "../repository.js";

export const deleteDespesaById = async (id: string) => {
  const document = await deleteDocument(id, despesasModel);

  return document;
};
