import { findReceitaById } from "../../repository/receitas_repository/findReceitaById.js";

export const listReceitaById = async (id: string) => {
  const receita = await findReceitaById(id);
  return receita
    ? {
        date: receita.date,
        description: receita.description,
        value: receita.value,
      }
    : "Id not found";
};
