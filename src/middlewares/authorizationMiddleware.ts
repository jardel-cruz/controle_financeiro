import type { RequestHandler } from "express";
import type { GenericError } from "../helpers/erros.js";
import { authorizationService } from "../services/user_services/authorizationServices.js";

export const authorizationMiddleware: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const token = req.get("authorization");
    const result = await authorizationService(token);

    req.params.userId = result;

    return next();
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
