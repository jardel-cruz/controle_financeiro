const date1 = "2022/10/01";
const date2 = Date.now();

console.log(new Date(date1).getMonth() === new Date(date2).getMonth());
