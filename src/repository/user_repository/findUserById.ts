import { findDocumentById } from "../repository.js";
import { userModel } from "../../models/user.model.js";

export const findUserById = async (id: string) =>
  findDocumentById(id, userModel);
