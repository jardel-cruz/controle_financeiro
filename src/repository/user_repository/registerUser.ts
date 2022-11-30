import { saveDocument } from "../repository.js";
import { userModel } from "../../models/user.model.js";
import type { IRegisterUser } from "../../types/userTypes.js";

export const registerUser = async (data: IRegisterUser) => {
  const result = await saveDocument(data, userModel);

  return result;
};
