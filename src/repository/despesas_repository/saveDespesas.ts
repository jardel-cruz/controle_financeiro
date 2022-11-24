import { despesasModel } from "../../models/despesas.model.js";
import { ISaveDespesasArguments } from "../../types/despesasTypes.js";
import { saveDocument } from "../repository.js";

export const saveDespesas = async (data: ISaveDespesasArguments) =>
  saveDocument(data, despesasModel);
