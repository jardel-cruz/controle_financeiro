export interface IReceitas {
  _id: string;
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
