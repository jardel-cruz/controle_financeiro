import { findOneDocument } from "../repository.js";
import { userModel } from "../../models/user.model.js";

export const findUserByEmail = async (email: string) =>
  findOneDocument({ email }, userModel);
