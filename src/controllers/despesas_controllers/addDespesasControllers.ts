import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { createDespesasServices } from "../../services/despesas_services/createDespesasServices.js";

export const addDespesasController: RequestHandler = async (req, res) => {
  try {
    const { date, description, value, category } = req.body;
    const result = await createDespesasServices({
      date,
      description,
      value,
    });

    return res.status(201).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
