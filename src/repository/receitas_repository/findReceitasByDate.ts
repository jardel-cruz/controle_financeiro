import type { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { findReceitas } from "./findReceitas.js";

export const findReceitasByDate = async (min: number, max: number) =>
  findReceitas({
    date: { $gt: min, $lt: max },
  } as any as IFindReceitasArguments);
