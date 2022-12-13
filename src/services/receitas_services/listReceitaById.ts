import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { findReceitaById } from "../../repository/receitas_repository/findReceitaById.js";
import { filterResponseData } from "../../utils/callbacks.js";

export const listReceitaById = async (id: string, userId: string) => {
  const receita = await findReceitaById(id);
  return receita?.userId === userId
    ? filterResponseData(receita)
    : triggerIdNotFound();
};
