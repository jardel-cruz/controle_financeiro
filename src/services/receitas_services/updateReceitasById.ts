import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";
import { parserDate } from "../../utils/parserData.js";
import { validateDate } from "../../utils/validateDate.js";
import { validateDateAndDescription } from "../../utils/validateDateAndDescription.js";
import { findByIdAndUpdateReceitas } from "../../repository/receitas_repository/findByIdAndUdateReceitas.js";

export const updateReceitasById = async (
  id: string,
  data: ICreateReceitasArguments
) => {
  const { date, description, value } = data;

  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate) throw new Error();

  const dateParser = await parserDate(date!);

  if (await validateDateAndDescription(description, dateParser))
    throw new Error();

  const dataConvert: ISaveReceiasArguments = {
    date: dateParser,
    description,
    value,
  };

  const result = await findByIdAndUpdateReceitas(id, dataConvert);

  return result ? "Success" : "Id not found";
};
