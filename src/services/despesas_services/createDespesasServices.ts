import { parserDate } from "../../modules/parserData.js";
import { validateDate } from "../../modules/validateDate.js";
import { validateDateAndDescription } from "../../modules/validateDateAndDescription.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { saveDespesas } from "../../repository/despesas_repository/saveDespesas.js";
import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import { Categories } from "../../types/despesasTypes.js";
import type {
  ICreateDespesasArguments,
  ISaveDespesasArguments,
} from "../../types/despesasTypes.js";
import { validateCategories } from "../../modules/validateCategories.js";

export const createDespesasServices = async (
  data: ICreateDespesasArguments
) => {
  const { date, description, value, categories = Categories.outras } = data;

  const validatedDate = await validateDate(date);
  const validatedCategories = await validateCategories(categories);

  if (!description || !value || !validatedDate || !validatedCategories)
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description!, dateParser, findDespesas))
    triggerInvalidArgument("Argumentos inválidos");

  const dataConvert: ISaveDespesasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    categories: categories.toLowerCase() as Categories,
    userId: "",
  };

  const resultSave = await saveDespesas(dataConvert);

  return resultSave;
};
