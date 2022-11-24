import { despesasModel } from "../../models/despesas.model.js";
import { findDocumentById } from "../repository.js";

export const findDespesasById = async (id: string) =>
  findDocumentById(id, despesasModel);
