import { IReceitas } from "./receitasTypes.js";

export interface IDespesas extends IReceitas {
  categories: Categories;
  userId: string;
}

export interface ISaveDespesasArguments extends Omit<IDespesas, "_id"> {}

export interface IFindDespesasArguments extends Partial<IDespesas> {}

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

export type SaveDespesasFunction = (
  data: ICreateDespesasArguments
) => Promise<string | undefined>;
