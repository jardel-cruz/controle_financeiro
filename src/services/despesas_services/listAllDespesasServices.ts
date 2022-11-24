import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import type { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { filterResponseData } from "../../utils/callbacks.js";

export const listAllDespesas = async (filter: IFindReceitasArguments) => {
  const receitas = await findDespesas(filter);

  return receitas.map(filterResponseData);
};
