import type { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { createUserService } from "../../services/user_services/createUserService.js";

export const userRegistrationController: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUserService({ name, email, password });

    res.set({ authorization: result });

    return res.status(204).end();
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
