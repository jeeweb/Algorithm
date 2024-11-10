let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);
const result = input.sort((a, b) => b - a).join("");
console.log(result);
