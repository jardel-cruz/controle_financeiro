import type { ICreateReceitasArguments } from "../types/receitasTypes.js";
import { parserDate } from "./parserData.js";
import { validateDate } from "./validateDate.js";
import { validateDateAndDescription } from "./validateDateAndDescription.js";
import { findReceitas } from "../repository/receitas_repository/findReceitas.js";

export async function validateDataFromReceitas(data: ICreateReceitasArguments) {
  const { userId, date, description, value } = data;
  const validatedDate = await validateDate(date);

  if (!description || !value || !validatedDate || !userId) {
    return false;
  }

  const dateParser = await parserDate(date!);

  if (
    await validateDateAndDescription(
      userId,
      description!,
      dateParser,
      findReceitas
    )
  ) {
    return false;
  }

  return true;
}
