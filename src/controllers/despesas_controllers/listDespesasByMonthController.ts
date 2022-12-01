import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { listDespesaByMonthService } from "../../services/despesas_services/listDespesasByMonthService.js";

export const listDespesasByMonthController: RequestHandler = async (
  req,
  res
) => {
  try {
    const { year, month, userId } = req.params;
    const result =
      year && month
        ? await listDespesaByMonthService({ month, year, userId })
        : [];

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
