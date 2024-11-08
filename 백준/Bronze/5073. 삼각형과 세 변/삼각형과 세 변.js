let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => num.split(" ").map(Number));
input.pop();
input.forEach((arr) => {
  arr.sort((a, b) => a - b);
  const [a, b, c] = arr;
  if (a === b && b === c && a === c) {
    console.log("Equilateral");
  } else if (a + b <= c) {
    console.log("Invalid");
  } else if (
    (a === b && b !== c && a !== c) ||
    (a === c && a !== b && b !== c) ||
    (b === c && a !== b && a !== c)
  ) {
    console.log("Isosceles");
  } else if (a !== b && b !== c && a !== c) {
    console.log("Scalene");
  } else {
  }
});
