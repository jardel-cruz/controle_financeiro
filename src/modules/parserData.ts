export const parserDate = async (date: string) => {
  const parser = date.split("/").reverse().join("/");

  return new Date(parser).getTime();
};
