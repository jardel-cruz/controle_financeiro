import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import { findReceitasByDate } from "../../repository/receitas_repository/findReceitasByDate.js";
import { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { filterResponseData } from "../../utils/callbacks.js";

interface ListReceitaByMonth {
  year: string;
  month: string;
  userId: string;
}

export const listReceitaByMonthService = async ({
  month,
  year,
  userId,
}: ListReceitaByMonth) => {
  const date1 = new Date(`${year}/${month}/01`).getTime();
  const date2 = new Date(`${year}/${month}/30`).getTime();

  const result = await findReceitasByDate(date1, date2, userId);

  return result
    ? await Promise.all(result.map(filterResponseData))
    : triggerInvalidArgument("Error");
};
