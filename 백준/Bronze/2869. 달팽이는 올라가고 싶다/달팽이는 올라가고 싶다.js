const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b, v] = input;

console.log(Math.ceil((v - b) / (a - b)));
