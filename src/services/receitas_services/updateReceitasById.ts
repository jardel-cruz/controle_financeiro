import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";
import { findByIdAndUpdateReceitas } from "../../repository/receitas_repository/findByIdAndUdateReceitas.js";
import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import {
  triggerIdNotFound,
  triggerInvalidArgument,
} from "../../helpers/triggerErrors.js";
import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";

export const updateReceitasById = async (
  id: string,
  data: ICreateReceitasArguments
) => {
  const { date, description, value } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser, findReceitas))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
  };

  const result = await findByIdAndUpdateReceitas(id, dataConvert);

  return result;
};
