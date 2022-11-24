import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { updateDespesasServices } from "../../services/despesas_services/updateDespesasServices.js";

export const updateDespesasController: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, description, value } = req.body;

    const result = id
      ? await updateDespesasServices(id, { date, description, value })
      : triggerIdNotFound();

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
