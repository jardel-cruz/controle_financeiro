import type { IFindDespesasArguments } from "../../types/despesasTypes.js";
import { findDespesas } from "./findDespesas.js";

export const findDespesasByDate = async (
  min: number,
  max: number,
  userId: string
) =>
  findDespesas({
    date: { $gt: min, $lt: max },
    userId,
  } as any as IFindDespesasArguments);
