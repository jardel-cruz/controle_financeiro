export interface IReceitas {
  description: string;
  value: number;
  date: number;
  userId: string;
}

export interface ISaveReceiasArguments extends Omit<IReceitas, "_id"> {}

export interface IFindReceitasArguments extends Partial<IReceitas> {}

export interface ICreateReceitasArguments
  extends Omit<IFindReceitasArguments, "date"> {
  date?: string;
}

export type SaveReceitasFunction = (
  data: ICreateReceitasArguments
) => Promise<string | undefined>;
