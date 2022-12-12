export interface IReceitas {
  description: string;
  value: number;
  date: number;
  userId: string;
}

export interface ISaveReceiasArguments extends Omit<IReceitas, "_id"> {}

export interface IFindReceitasArguments {
  description?: string;
  value?: number;
  date?: number;
  userId: string;
}

export interface ICreateReceitasArguments
  extends Omit<IFindReceitasArguments, "date"> {
  date?: string;
}

export type SaveReceitasFunction = (
  data: ICreateReceitasArguments
) => Promise<string | undefined>;
