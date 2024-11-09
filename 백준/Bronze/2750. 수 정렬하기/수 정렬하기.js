let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();
const sorted = input.sort((a, b) => a - b);
sorted.forEach((num) => console.log(num));
