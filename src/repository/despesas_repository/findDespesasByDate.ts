import type { IFindDespesasArguments } from "../../types/despesasTypes.js";
import { findDespesas } from "./findDespesas.js";

export const findDespesasByDate = async (min: number, max: number) =>
  findDespesas({
    date: { $gt: min, $lt: max },
  } as any as IFindDespesasArguments);
