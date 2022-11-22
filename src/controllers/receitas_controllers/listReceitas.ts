import type { RequestHandler } from "express";
import { listAllReceitas } from "../../services/receitas_services/listAllReceitas.js";
import { listReceitaById } from "../../services/receitas_services/listReceitaById.js";

export const listReceitas: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const result = id ? await listReceitaById(id) : await listAllReceitas({});

    return res.status(200).json({ content: result });
  } catch (error) {
    return res.status(500).json({ msg: "internal server error" });
  }
};
