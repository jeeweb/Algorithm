let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const totalSum = input.reduce((a, b) => a += b);
const avg = totalSum / input.length;
const sorted = input.sort((a, b) => a - b);
console.log(avg);
console.log(sorted[2]);
