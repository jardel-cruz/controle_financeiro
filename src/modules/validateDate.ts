import { filterFalseValues, mapDateToBoolean } from "../utils/callbacks.js";

export const validateDate = async (date?: string) => {
  if (!date) return false;

  const dateArray = date.split("/");
  if (dateArray.length !== 3) return false;

  const validate = dateArray.map(mapDateToBoolean).filter(filterFalseValues);

  if (validate.length > 0) return false;

  return true;
};
