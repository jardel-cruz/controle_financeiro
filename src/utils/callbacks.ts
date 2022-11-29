import type { Document } from "mongoose";
import { Categories, IDespesas } from "../types/despesasTypes.js";
import type { IReceitas } from "../types/receitasTypes.js";

export const filterFalseValues = (item: boolean) => item === false;

export const mapDateToBoolean = (item: string, index: number) => {
  if (index === 2) return item.length === 4;
  if (index === 1) {
    const number = Number(item);

    return number >= 1 && number <= 12;
  }
  const number = Number(item);
  return item.length === 2 && number >= 1 && number <= 31;
};

export const filterResponseData = async (
  item: (Document<IDespesas | IReceitas> & IDespesas) | IReceitas
): Promise<IReceitas | IDespesas> => {
  const obj = item as IDespesas;
  if (obj.categories) {
    return {
      categories: obj.categories,
      value: obj.value,
      date: obj.date,
      description: obj.description,
    } as IDespesas;
  } else {
    return {
      value: obj.value,
      date: obj.date,
      description: obj.description,
    } as IReceitas;
  }
};

export const filterDocumentsByDescription =
  (description: string) => (item: IDespesas | IReceitas) =>
    item.description.toLowerCase().includes(description);

export const calcValueOfDocument = (
  previousValue: number,
  currentValue: IDespesas | IReceitas
) => previousValue + currentValue.value;

export const calcValueDocumentByCategory =
  (category: Categories) =>
  (previousValue: number, currentValue: IDespesas | IReceitas) => {
    const { categories, value } = currentValue as IDespesas;
    if (categories === category) {
      return previousValue + value;
    }

    return previousValue;
  };
