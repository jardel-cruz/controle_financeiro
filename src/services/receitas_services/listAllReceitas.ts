import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import type { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { filterResponseData } from "../../utils/callbacks.js";

export const listAllReceitas = async (filter: IFindReceitasArguments) => {
  const receitas = await findReceitas(filter);

  return receitas.map(filterResponseData);
};
