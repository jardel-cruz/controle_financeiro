import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { updateReceitasById } from "../../services/receitas_services/updateReceitasById.js";

export const updateReceitas: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, description, value } = req.body;

    const result = id
      ? await updateReceitasById(id, { date, description, value })
      : triggerIdNotFound();

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;
    return res.status(err.code).json({ msg: error });
  }
};
