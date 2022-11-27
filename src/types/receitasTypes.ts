export interface IReceitas {
  description: string;
  value: number;
  date: number;
}

export interface ISaveReceiasArguments extends Omit<IReceitas, "_id"> {}

export interface IFindReceitasArguments {
  description?: string;
  value?: number;
  date?: number;
}

export interface ICreateReceitasArguments
  extends Omit<IFindReceitasArguments, "date"> {
  date?: string;
}
