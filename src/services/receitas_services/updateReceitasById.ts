import { parserDate } from "../../modules/parserData.js";
import { findByIdAndUpdateReceitas } from "../../repository/receitas_repository/findByIdAndUdateReceitas.js";
import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";
import { validateAllData } from "../../modules/validateAllData.js";

export const updateReceitasById = async (
  id: string,
  data: ICreateReceitasArguments
) => {
  const { date, description, value, userId } = data;

  !(await validateAllData({ userId, date, description, value }, "despesas")) &&
    triggerInvalidArgument("Argumentos inválidos");

  const dateParser = await parserDate(date!);

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description: description!,
    value: value!,
    userId: userId!,
  };

  const resultSave = await findByIdAndUpdateReceitas(id, dataConvert);

  return resultSave;
};
