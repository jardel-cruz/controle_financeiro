import type { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { findReceitas } from "./findReceitas.js";

export const findReceitasByDate = async (
  min: number,
  max: number,
  userId: string
) =>
  findReceitas({
    date: { $gt: min, $lt: max },
    userId,
  } as any as IFindReceitasArguments);
