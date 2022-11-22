import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import type { IFindReceitasArguments } from "../../types/receitasTypes.js";

export const listAllReceitas = async (filter: IFindReceitasArguments) => {
  const receitas = await findReceitas(filter);

  return receitas.map((item) => ({
    date: item.date,
    description: item.description,
    value: item.value,
  }));
};
