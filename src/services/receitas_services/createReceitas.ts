import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";

import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";

export const createReceitas = async (
  data: ICreateReceitasArguments,
  save: (data: ISaveReceiasArguments) => Promise<string | undefined>
) => {
  const { date, description, value, userId } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate || !userId)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser, findReceitas))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    userId: userId,
  };

  const resultSave = await save(dataConvert);

  return resultSave;
};
