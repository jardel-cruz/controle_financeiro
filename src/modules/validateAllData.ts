import { ICreateDespesasArguments } from "../types/despesasTypes";
import { validateDataFromDespesas } from "./validateDataFromDespesas.js";
import { validateDataFromReceitas } from "./validateDataFromReceitas.js";

interface Data extends ICreateDespesasArguments {}

export async function validateAllData(
  data: Data,
  validate: "despesas" | "receitas"
) {
  if (validate === "despesas") {
    return validateDataFromDespesas(data);
  } else if (validate === "receitas") {
    return validateDataFromReceitas(data);
  }

  return false;
}
