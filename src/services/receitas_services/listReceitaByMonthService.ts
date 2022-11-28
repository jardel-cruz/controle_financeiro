import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import { IFindReceitasArguments } from "../../types/receitasTypes.js";
import { filterResponseData } from "../../utils/callbacks.js";

interface ListReceitaByMonth {
  year: string;
  month: string;
}

export const listReceitaByMonthService = async ({
  month,
  year,
}: ListReceitaByMonth) => {
  const date1 = new Date(`${year}/${month}/01`).getTime();
  const date2 = new Date(`${year}/${month}/30`).getTime();

  const result = await findReceitas({
    date: { $gt: date1, $lt: date2 },
  } as any as IFindReceitasArguments);

  return result
    ? await Promise.all(result.map(filterResponseData))
    : triggerInvalidArgument("Error");
};
