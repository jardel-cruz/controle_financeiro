import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { filterResponseData } from "../../utils/callbacks.js";

interface ListReceitaByMonth {
  year: string;
  month: string;
}

export const listDespesaByMonthService = async ({
  month,
  year,
}: ListReceitaByMonth) => {
  const date1 = new Date(`${year}/${month}/01`).getTime();
  const date2 = new Date(`${year}/${month}/30`).getTime();

  const result = await findDespesas({
    date: { $gt: date1, $lt: date2 },
  } as any as IFindReceitasArguments);

  return result
    ? await Promise.all(result.map(filterResponseData))
    : triggerInvalidArgument("Error");
};
