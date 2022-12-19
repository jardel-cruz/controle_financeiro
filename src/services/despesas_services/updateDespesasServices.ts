import { parserDate } from "../../modules/parserData.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findByIdAndUpdateDespesas } from "../../repository/despesas_repository/findByIdAndUpdateDespesas.js";
import { Categories } from "../../types/despesasTypes.js";
import {
  ICreateDespesasArguments,
  ISaveDespesasArguments,
} from "../../types/despesasTypes.js";
import { validateAllData } from "../../modules/validateAllData.js";

export const updateDespesasServices = async (
  id: string,
  data: ICreateDespesasArguments
) => {
  const {
    date,
    description,
    value,
    categories = Categories.outras,
    userId,
  } = data;

  !(await validateAllData(
    { userId, categories, date, description, value },
    "despesas"
  )) && triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  const dataConvert: ISaveDespesasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    categories: categories.toLowerCase() as Categories,
    userId: userId!,
  };

  const resultSave = await findByIdAndUpdateDespesas(id, dataConvert);

  return resultSave;
};
