import type { RequestHandler } from "express";

export const addReceitaController: RequestHandler = async (req, res) => {
  res.status(201).json({ msg: "created" });
};
