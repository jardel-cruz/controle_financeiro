import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { triggerIdNotFound } from "../../helpers/triggerErrors.js";
import { deleteReceitasService } from "../../services/receitas_services/deleteReceitasService.js";

export const deleteReceitas: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = id ? await deleteReceitasService(id) : triggerIdNotFound();

    return res.status(200).json({ msg: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
