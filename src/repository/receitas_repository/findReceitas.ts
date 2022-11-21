import { receitasModel } from "../../models/receitas.model.js";
import { findDocuments } from "../repository.js";
import type { IFindReceitasArguments } from "../../types/receitasTypes";

export const findReceitas = async (filter: IFindReceitasArguments) => {
  const documents = findDocuments(filter, receitasModel);
};
