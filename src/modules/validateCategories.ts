import { Categories } from "../types/despesasTypes.js";

export const validateCategories = async (categories: Categories) => {
  const array = [
    Categories.alimentação,
    Categories.educação,
    Categories.imprevistos,
    Categories.moradia,
    Categories.lazer,
    Categories.saúde,
    Categories.transporte,
    Categories.outras,
  ] as Categories[];

  return array.includes(categories.toLowerCase() as Categories);
};
