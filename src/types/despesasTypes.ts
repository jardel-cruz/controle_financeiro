import { IReceitas } from "./receitasTypes.js";

export interface IDespesas extends IReceitas {
  categories: string;
}

export interface ISaveDespesasArguments extends Omit<IReceitas, "_id"> {}

export interface IFindDespesasArguments {
  description?: string;
  value?: number;
  date?: number;
}

export interface ICreateDespesasArguments
  extends Omit<IFindDespesasArguments, "date"> {
  date?: string;
}
