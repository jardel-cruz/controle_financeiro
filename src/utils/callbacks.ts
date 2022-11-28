import type { Document } from "mongoose";
import { IDespesas } from "../types/despesasTypes.js";
import type { IReceitas } from "../types/receitasTypes.js";

export const filterFalseValues = (item: boolean) => item === false;

export const mapDateToBoolean = (item: string, index: number) => {
  if (index === 2) return item.length === 4;

  return item.length === 2;
};

export const filterResponseData = (
  item: (Document<IDespesas | IReceitas> & IDespesas) | IReceitas
): IReceitas | IDespesas => {
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
