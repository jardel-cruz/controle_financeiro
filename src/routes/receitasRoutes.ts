import { Router } from "express";

const receitasRouter = Router({ caseSensitive: true });

receitasRouter.post("/receitas", async (req, res) => {
  res.status(200).json({ msg: "success" });
});

export { receitasRouter };
