import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import {
  filterDocumentsByDescription,
  filterResponseData,
} from "../../utils/callbacks.js";

export const listAllReceitas = async (description?: string) => {
  const receitas = await findReceitas({});

  if (description) {
    const obj = await Promise.all(receitas.map(filterResponseData));
    const result = obj.filter(filterDocumentsByDescription(description));
    return result;
  }

  return Promise.all(receitas.map(filterResponseData));
};
