const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const factorial = (num) => {
  if (num < 2) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(input));