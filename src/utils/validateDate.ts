import { filterFalseValues, mapDateToBoolean } from "./callbacks.js";

export const validateDate = async (date: string | undefined) => {
  if (!date) return false;

  const dateArray = date.split("/");
  if (dateArray.length !== 3) return false;

  const validate = dateArray.map(mapDateToBoolean).filter(filterFalseValues);

  if (validate.length > 0) return false;

  return true;
};
