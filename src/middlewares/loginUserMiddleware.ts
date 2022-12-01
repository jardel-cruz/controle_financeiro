import { RequestHandler } from "express";
import { loginUserService } from "../services/user_services/loginUserService.js";
import type { GenericError } from "../helpers/erros.js";
import { triggerNotAuthorized } from "../helpers/triggerErrors.js";

export const loginUserMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService({ email, password });

    if (result) {
      req.params.userId = result;
      return next();
    } else {
      return triggerNotAuthorized();
    }
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
