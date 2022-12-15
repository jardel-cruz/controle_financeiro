import type { ICreateDespesasArguments } from "../types/despesasTypes.js";
import { parserDate } from "./parserData.js";
import { validateDateAndDescription } from "./validateDateAndDescription.js";
import { findDespesas } from "../repository/despesas_repository/findDespesas.js";
import { validateDate } from "./validateDate.js";
import { validateCategories } from "./validateCategories.js";

export async function validateDataFromDespesas(data: ICreateDespesasArguments) {
  const { userId, categories, date, description, value } = data;
  const validatedDate = await validateDate(date);
  const validatedCategories = await validateCategories(categories!);

  if (
    !description ||
    !value ||
    !validatedDate ||
    !validatedCategories ||
    !userId
  ) {
    return false;
  }

  const dateParser = await parserDate(date!);

  if (
    await validateDateAndDescription(
      userId,
      description!,
      dateParser,
      findDespesas
    )
  ) {
    return false;
  }

  return true;
}
