import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { listAllDespesas } from "../../services/despesas_services/listAllDespesasServices.js";
import { listDespesasById } from "../../services/despesas_services/listDespesasByIdService.js";

export const listDespesasController: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { descricao } = req.query;

    const result = id
      ? await listDespesasById(id)
      : await listAllDespesas(descricao as string);

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;
    return res.status(err.code || 500).json({ msg: error });
  }
};
