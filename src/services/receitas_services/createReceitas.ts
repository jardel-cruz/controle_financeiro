import { parserDate } from "../../modules/parserData.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { saveReceitas } from "../../repository/receitas_repository/saveReceita.js";

import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";
import { validateAllData } from "../../modules/validateAllData.js";

export const createReceitas = async (
  { userId, date, description, value }: ICreateReceitasArguments,
  save: (data: ISaveReceiasArguments) => Promise<string | undefined>
) => {
  (await validateAllData({ userId, date, description, value }, "receitas")) &&
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    userId: userId,
  };

  const resultSave = await saveReceitas(dataConvert);

  return resultSave;
};
