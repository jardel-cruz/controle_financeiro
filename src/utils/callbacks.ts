import type { Document } from "mongoose";
import type { IReceitas } from "../types/receitasTypes.js";

export const filterFalseValues = (item: boolean) => item === false;

export const mapDateToBoolean = (item: string, index: number) => {
  if (index === 2) return item.length === 4;

  return item.length === 2;
};

export const filterResponseData = (
  item: Document<unknown, any, IReceitas> &
    IReceitas &
    Required<{
      _id: string;
    }>
) => ({
  date: item.date,
  description: item.description,
  value: item.value,
});
