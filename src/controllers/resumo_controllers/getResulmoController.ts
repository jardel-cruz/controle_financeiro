import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { buildResumo } from "../../services/resumo_services/buildResumoService.js";

export const getResumo: RequestHandler = async (req, res) => {
  try {
    const { month, year, userId } = req.params;
    const result =
      month && year ? await buildResumo({ month, year, userId }) : {};

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
