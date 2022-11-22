import { parserDate } from "../../utils/parserData.js";
import { validateDate } from "../../utils/validateDate.js";
import { validateDateAndDescription } from "../../utils/validateDateAndDescription.js";

import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";

export const createReceitas = async (
  data: ICreateReceitasArguments,
  save: (data: ISaveReceiasArguments) => Promise<string | undefined>
) => {
  const { date, description, value } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
  };

  const resultSave = await save(dataConvert);

  return resultSave;
};
