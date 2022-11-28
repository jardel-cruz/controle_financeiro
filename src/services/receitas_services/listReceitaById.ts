import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { findReceitaById } from "../../repository/receitas_repository/findReceitaById.js";
import { filterResponseData } from "../../utils/callbacks.js";

export const listReceitaById = async (id: string) => {
  const receita = await findReceitaById(id);
  return receita ? filterResponseData(receita) : triggerIdNotFound();
};
