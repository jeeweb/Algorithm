const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
input.pop();
input.map((arr) => {
  const [a, b] = arr;
  if (a % b === 0 && Number.isInteger(a / b)) {
    console.log("multiple");
  } else if (b % a === 0 && Number.isInteger(b / a)) {
    console.log("factor");
  } else {
    console.log("neither");
  }
});
