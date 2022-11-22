import type { RequestHandler } from "express";
import { GenericError } from "../../helpers/erros.js";
import { listAllReceitas } from "../../services/receitas_services/listAllReceitas.js";
import { listReceitaById } from "../../services/receitas_services/listReceitaById.js";

export const listReceitas: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const result = id ? await listReceitaById(id) : await listAllReceitas({});

    return res.status(200).json({ content: result });
  } catch (error) {
    const err = error as GenericError;
    return res.status(err.code || 500).json({ msg: error });
  }
};
