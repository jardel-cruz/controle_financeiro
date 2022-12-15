import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import {
  filterDocumentsByDescription,
  filterResponseData,
} from "../../utils/callbacks.js";

export const listAllDespesas = async (userId: string, description?: string) => {
  const despesas = await findDespesas({ userId });
  const result = await Promise.all(despesas.map(filterResponseData));

  if (description) {
    const arrayFilter = result.filter(
      filterDocumentsByDescription(description)
    );
    return arrayFilter;
  }

  return result;
};
