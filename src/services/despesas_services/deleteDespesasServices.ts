import { triggerInvalidArgument } from "../../helpers/triggerErrors.js";
import { deleteDespesaById } from "../../repository/despesas_repository/deleteDespesaById.js";

export const deleteDespesasService = async (id: string) => {
  const result = await deleteDespesaById(id);

  return result ? "Success" : triggerInvalidArgument("Erro");
};
