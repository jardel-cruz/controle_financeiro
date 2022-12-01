import { IReceitas } from "./receitasTypes.js";

export interface IDespesas extends IReceitas {
  categories: Categories;
  userId: string;
}

export interface ISaveDespesasArguments extends Omit<IDespesas, "_id"> {}

export interface IFindDespesasArguments {
  description?: string;
  value?: number;
  date?: number;
  categories?: Categories;
  userId: string;
}

export interface ICreateDespesasArguments
  extends Omit<IFindDespesasArguments, "date"> {
  date?: string;
  categories?: Categories;
}

export enum Categories {
  alimentação = "alimentação",
  saúde = "saúde",
  moradia = "moradia",
  transporte = "transporte",
  educação = "educação",
  lazer = "lazer",
  imprevistos = "imprevistos",
  outras = "outras",
}
