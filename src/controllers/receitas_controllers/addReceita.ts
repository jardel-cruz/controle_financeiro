import type { RequestHandler } from "express";
import { saveReceitas } from "../../repository/receitas_repository/saveReceita.js";
import { createReceitas } from "../../services/receitas_services/createReceitas.js";

export const addReceitaController: RequestHandler = async (req, res) => {
  try {
    const result = await createReceitas(
      {
        date: new Date().toDateString(),
        description: "Description2",
        value: 30,
      },
      saveReceitas
    );
    res.status(201).json({ msg: result });
  } catch (error: unknown) {
    res.status(400).json({ msg: error });
  }
};
