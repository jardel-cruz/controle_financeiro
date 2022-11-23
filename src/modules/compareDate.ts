type DateArgument = string | number;

export const compareDate = (date1: DateArgument, date2: DateArgument) =>
  new Date(date1).getMonth() === new Date(date2).getMonth();
