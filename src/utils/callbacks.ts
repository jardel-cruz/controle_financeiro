export const filterFalseValues = (item: boolean) => item === false;

export const mapDateToBoolean = (item: string, index: number) => {
  if (index === 2) return item.length === 4;

  return item.length === 2;
};
