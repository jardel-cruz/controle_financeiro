import type { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { createUserService } from "../../services/user_services/creatUserService.js";

export const userRegistrationController: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUserService({ name, email, password });

    return res.status(201).json({ content: result });
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
