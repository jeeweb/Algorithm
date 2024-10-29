const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
const factors = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) factors.push(i);
}
console.log(factors.length >= k ? factors[k - 1] : 0);
