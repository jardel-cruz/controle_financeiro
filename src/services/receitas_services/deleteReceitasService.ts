import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { deleteReceitaById } from "../../repository/receitas_repository/deleteReceitaById.js";

export const deleteReceitasService = async (id: string) => {
  const result = await deleteReceitaById(id);

  return result ? "Success" : triggerInvalidArgument("Erro");
};
