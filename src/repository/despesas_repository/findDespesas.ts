import { despesasModel } from "../../models/despesas.model.js";
import { IFindDespesasArguments } from "../../types/despesasTypes.js";
import { findDocuments } from "../repository.js";

export const findDespesas = async (filter: IFindDespesasArguments) =>
  findDocuments(filter, despesasModel);
