import { findReceitas } from "../../repository/receitas_repository/findReceitas.js";

export const listAllReceitas = async () => {
  const receitas = await findReceitas({});

  return receitas.map((item) => ({
    date: item.date,
    description: item.description,
    value: item.value,
  }));
};
