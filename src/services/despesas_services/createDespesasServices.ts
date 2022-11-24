import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";

import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { saveDespesas } from "../../repository/despesas_repository/saveDespesas.js";
import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";

export const createDespesasServices = async (
  data: ICreateReceitasArguments
) => {
  const { date, description, value } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser, findDespesas))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
  };

  const resultSave = await saveDespesas(dataConvert);

  return resultSave;
};
