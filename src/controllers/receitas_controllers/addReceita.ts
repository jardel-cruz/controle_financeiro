import type { RequestHandler } from "express";
import { createReceitas } from "../../services/receitas_services/createReceitas.js";

export const addReceitaController: RequestHandler = async (req, res) => {
  try {
    const { date, description, value } = req.body;
    const { userId } = req.params;

    const result = await createReceitas({
      date,
      description,
      value,
      userId,
    });

    return res.status(201).json({ msg: result });
  } catch (error: unknown) {
    return res.status(400).json({ msg: error });
  }
};
