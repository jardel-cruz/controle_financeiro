export const genDuration = () => {
  const dateNow = new Date();
  const futureDate = `${dateNow.getFullYear()}/${dateNow.getMonth()}/${
    dateNow.getDay() + 1
  }`;

  return new Date(futureDate).getTime();
};
