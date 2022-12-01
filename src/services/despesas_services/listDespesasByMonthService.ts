import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findDespesasByDate } from "../../repository/despesas_repository/findDespesasByDate.js";
import { filterResponseData } from "../../utils/callbacks.js";

interface ListReceitaByMonth {
  year: string;
  month: string;
  userId: string;
}

export const listDespesaByMonthService = async ({
  month,
  year,
  userId,
}: ListReceitaByMonth) => {
  const date1 = new Date(`${year}/${month}/01`).getTime();
  const date2 = new Date(`${year}/${month}/30`).getTime();

  const result = await findDespesasByDate(date1, date2, userId);

  return result
    ? await Promise.all(result.map(filterResponseData))
    : triggerInvalidArgument("Error");
};
