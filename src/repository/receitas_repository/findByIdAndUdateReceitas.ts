import { receitasModel } from "../../models/receitas.model.js";
import { updateDocumentById } from "../repository.js";
import type { ISaveReceiasArguments } from "../../types/receitasTypes.js";

export const findByIdAndUpdateReceitas = async (
  id: string,
  data: ISaveReceiasArguments
) => updateDocumentById(id, data, receitasModel);
