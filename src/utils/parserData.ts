export const parserDate = async (date: string) => {
  const newDate = await validateDate(date);

  if (!newDate) return undefined;

  return new Date(newDate).getTime();
};

const validateDate = async (date: string) => {
  const dateArray = date.split("/");
  if (dateArray.length !== 3) return undefined;

  const validate = dateArray
    .map((item, index) => {
      if (index === 2) return item.length === 4;

      return item.length === 2;
    })
    .filter((item) => item === false);

  if (validate.length > 0) return undefined;

  return dateArray.reverse().join("-");
};
