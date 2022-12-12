import { parserDate } from "../../modules/parserData.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { saveDespesas } from "../../repository/despesas_repository/saveDespesas.js";
import { Categories, SaveDespesasFunction } from "../../types/despesasTypes.js";
import type {
  ICreateDespesasArguments,
  ISaveDespesasArguments,
} from "../../types/despesasTypes.js";
import { validateAllData } from "../../modules/validateAllData.js";

export const createDespesasServices = async ({
  date,
  description,
  value,
  categories = Categories.outras,
  userId,
}: ICreateDespesasArguments) => {
  (await validateAllData(
    { userId, categories, date, description, value },
    "despesas"
  )) && triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  const dataConvert: ISaveDespesasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    categories: categories.toLowerCase() as Categories,
    userId: userId,
  };

  const resultSave = await saveDespesas(dataConvert);

  return resultSave;
};
