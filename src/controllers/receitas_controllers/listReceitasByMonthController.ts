import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { listReceitaByMonthService } from "../../services/receitas_services/listReceitaByMonthService.js";

export const listReceitasByMonthController: RequestHandler = async (
  req,
  res
) => {
  try {
    const { year, month } = req.params;
    const result =
      year && month ? await listReceitaByMonthService({ month, year }) : [];

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
