import { receitasModel } from "../../models/receitas.model.js";
import { saveDocument } from "../repository.js";
import type { ISaveReceiasArguments } from "../../types/receitasTypes.js";

export const saveReceitas = async (data: ISaveReceiasArguments) =>
  saveDocument(data, receitasModel);
