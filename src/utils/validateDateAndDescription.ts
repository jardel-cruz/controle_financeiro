import { findReceitas } from "../repository/receitas_repository/findReceitas.js";
import { compareDate } from "./compareDate.js";

export const validateDateAndDescription = async (
  description: string,
  date: number
) => {
  const conferi = await findReceitas({ description });

  return conferi.filter((item) => compareDate(item.date, date)).length !== 0;
};
