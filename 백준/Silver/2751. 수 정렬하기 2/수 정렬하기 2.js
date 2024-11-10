let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

let result = "";
const sorted = input.sort((a, b) => a - b);

sorted.forEach((num) => {
  result += num;
  result += "\n";
});
console.log(result.trim());
