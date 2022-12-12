import type { ICreateDespesasArguments } from "../types/despesasTypes.js";
import { parserDate } from "./parserData.js";
import { validateCategories } from "./validateCategories.js";
import { validateDate } from "./validateDate.js";
import { validateDateAndDescription } from "./validateDateAndDescription.js";
import { findDespesas } from "../repository/despesas_repository/findDespesas.js";
import { findReceitas } from "../repository/receitas_repository/findReceitas.js";

interface Data extends ICreateDespesasArguments {}

export async function validateAllData(
  data: Data,
  validate: "despesas" | "receitas"
) {
  const { userId, categories, date, description, value } = data;

  if (validate === "despesas") {
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
      await validateDateAndDescription(description!, dateParser, findDespesas)
    ) {
      return false;
    }

    return true;
  } else if (validate === "receitas") {
    const validatedDate = await validateDate(date);

    if (!description || !value || !validatedDate || !userId) {
      return false;
    }

    const dateParser = await parserDate(date!);

    if (
      await validateDateAndDescription(description!, dateParser, findReceitas)
    ) {
      return false;
    }

    return true;
  }
}
