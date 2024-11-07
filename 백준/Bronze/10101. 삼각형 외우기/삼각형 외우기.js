let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [a, b, c] = input;

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180 && (a === b || b === c || a === c)) {
  console.log("Isosceles");
} else if (a + b + c === 180 && a !== b && b !== c && a !== c) {
  console.log("Scalene");
} else if (a + b + c !== 180) {
  console.log("Error");
}