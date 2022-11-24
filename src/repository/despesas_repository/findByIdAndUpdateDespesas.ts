import { despesasModel } from "../../models/despesas.model.js";
import { ISaveDespesasArguments } from "../../types/despesasTypes.js";
import { updateDocumentById } from "../repository.js";

export const findByIdAndUpdateDespesas = async (
  id: string,
  data: ISaveDespesasArguments
) => updateDocumentById(id, data, despesasModel);
