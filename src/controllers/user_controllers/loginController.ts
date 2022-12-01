import { RequestHandler } from "express";
import type { GenericError } from "../../helpers/erros.js";
import { gnTokenJwtUserService } from "../../services/user_services/genTokenJwtSevice.js";

export const loginController: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const token = await gnTokenJwtUserService(userId);

    res.set({ authorization: token });

    res.status(204).end();
  } catch (error) {
    const err = error as GenericError;

    return res.status(err.code).json({ msg: err });
  }
};
