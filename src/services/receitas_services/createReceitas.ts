import type {
  ICreateReceitasArguments,
  ISaveReceiasArguments,
} from "../../types/receitasTypes.js";

export const createReceitas = async (
  data: ICreateReceitasArguments,
  save: (data: ISaveReceiasArguments) => Promise<string | undefined>
) => {
  const { date, description, value } = data;

  console.log(date, description, value);

  if (!date || !description || !value) throw new Error();

  const dataConvert: ISaveReceiasArguments = {
    date: new Date(date).getTime(),
    description,
    value,
  };

  const resultSave = await save(dataConvert);

  return resultSave;
};
