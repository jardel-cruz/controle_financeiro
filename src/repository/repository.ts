import type { Model } from "mongoose";

type Data = Record<string, any>;

export const saveDocument = async (data: Data, model: Model<any>) => {
  try {
    const document = await model.create(data);
    return document._id as string;
  } catch {
    return undefined;
  }
};

export const findDocuments = async <T>(filter: Data, model: Model<T>) => {
  const document = await model.find(filter);

  return document;
};
