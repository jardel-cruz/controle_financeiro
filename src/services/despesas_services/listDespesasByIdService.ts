import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { findDespesasById } from "../../repository/despesas_repository/findDespesaById.js";
import { filterResponseData } from "../../utils/callbacks.js";

export const listDespesasById = async (id: string) => {
  const receita = await findDespesasById(id);
  return receita ? filterResponseData(receita) : triggerIdNotFound();
};
