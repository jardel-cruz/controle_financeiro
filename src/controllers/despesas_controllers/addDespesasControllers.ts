import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { createDespesasServices } from "../../services/despesas_services/createDespesasServices.js";

export const addDespesasController: RequestHandler = async (req, res) => {
  try {
    const { date, description, value, categories } = req.body;
    const { userId } = req.params;
    const result = await createDespesasServices({
      date,
      description,
      value,
      categories,
      userId,
    });

    return res.status(201).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
