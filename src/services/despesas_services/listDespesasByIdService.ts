import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { findDespesasById } from "../../repository/despesas_repository/findDespesaById.js";

export const listDespesasById = async (id: string) => {
  const receita = await findDespesasById(id);
  return receita
    ? {
        date: receita.date,
        description: receita.description,
        value: receita.value,
      }
    : triggerIdNotFound();
};
