import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import { findByIdAndUpdateDespesas } from "../../repository/despesas_repository/findByIdAndUpdateDespesas.js";

import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";

export const updateDespesasServices = async (
  id: string,
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

  const resultSave = await findByIdAndUpdateDespesas(id, dataConvert);

  return resultSave;
};
