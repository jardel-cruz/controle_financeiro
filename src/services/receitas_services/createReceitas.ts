import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";

export const createReceitas = async (
  data: ICreateReceitasArguments,
  save: (data: ISaveReceiasArguments) => Promise<string | undefined>
) => {
  const { date, description, value } = data;

  if (!date || !description || !value) throw new Error();

  const dateParser = date.split("/").reverse().join("/");
  const conferi = await findReceitas({ description: description });

  if (conferi.length > 0) throw new Error();

  const dataConvert: ISaveReceiasArguments = {
    date: new Date(dateParser).getTime(),
    description,
    value,
  };

  const resultSave = await save(dataConvert);

  return resultSave;
};
