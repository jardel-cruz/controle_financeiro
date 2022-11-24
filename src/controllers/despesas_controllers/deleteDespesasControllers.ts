import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { deleteDespesasService } from "../../services/despesas_services/deleteDespesasServices.js";

export const deleteDespesasController: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = id ? await deleteDespesasService(id) : triggerIdNotFound();

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
