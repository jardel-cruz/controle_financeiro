import type { RequestHandler } from "express";
import { updateReceitasById } from "../../services/receitas_services/updateReceitasById.js";

export const updateReceitas: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, description, value } = req.body;

    const result = id
      ? await updateReceitasById(id, { date, description, value })
      : "Id not found";

    return res.status(200).json({ content: result });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};
