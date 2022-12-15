import type { Request, Response } from "express";

export async function notFoundMiddleware(req: Request, res: Response) {
  return res.status(404).json({ msg: "Route not found" });
}
