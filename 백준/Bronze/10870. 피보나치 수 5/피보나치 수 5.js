const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const fibonacci = (num) => {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(input));