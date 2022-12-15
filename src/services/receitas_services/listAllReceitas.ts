import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";
import {
  filterDocumentsByDescription,
  filterResponseData,
} from "../../utils/callbacks.js";

export const listAllReceitas = async (userId: string, description?: string) => {
  const receitas = await findReceitas({ userId });
  const result = await Promise.all(receitas.map(filterResponseData));

  if (description) {
    const arrayFilter = result.filter(
      filterDocumentsByDescription(description)
    );
    return arrayFilter;
  }

  return result;
};
