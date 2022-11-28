import { findDespesas } from "../../repository/despesas_repository/findDespesas.js";
import {
  filterDocumentsByDescription,
  filterResponseData,
} from "../../utils/callbacks.js";

export const listAllDespesas = async (description?: string) => {
  const despesas = await findDespesas({});

  if (description) {
    const obj = await Promise.all(despesas.map(filterResponseData));
    const result = obj.filter(filterDocumentsByDescription(description));
    return result;
  }

  return Promise.all(despesas.map(filterResponseData));
};
