import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import { findByIdAndUpdateDespesas } from "../../repository/despesas_repository/findByIdAndUpdateDespesas.js";
import { Categories } from "../../types/despesasTypes.js";
import {
  ICreateDespesasArguments,
  ISaveDespesasArguments,
} from "../../types/despesasTypes.js";

export const updateDespesasServices = async (
  id: string,
  data: ICreateDespesasArguments
) => {
  const { date, description, value, categories = Categories.outras } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser, findDespesas))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveDespesasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    categories,
    userId: "",
  };

  const resultSave = await findByIdAndUpdateDespesas(id, dataConvert);

  return resultSave;
};
