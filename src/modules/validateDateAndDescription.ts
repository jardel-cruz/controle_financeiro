import { Document } from "mongoose";
import { IDespesas, IFindDespesasArguments } from "../types/despesasTypes.js";
import { IFindReceitasArguments, IReceitas } from "../types/receitasTypes.js";
import { compareDate } from "./compareDate.js";

export const validateDateAndDescription = async (
  description: string,
  date: number,
  findDocument: (
    filter: IFindReceitasArguments | IFindDespesasArguments
  ) => Promise<(Document<unknown, any, IReceitas | IDespesas> & IReceitas)[]>
) => {
  const conferi = await findDocument({ description });

  return conferi.filter((item) => compareDate(item.date, date)).length !== 0;
};
