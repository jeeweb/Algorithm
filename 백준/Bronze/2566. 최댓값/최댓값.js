let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let maxValue = 0;
let row;
let col;
for (let i = 0; i < 9; i++) {
  if (maxValue <= Math.max(...input[i])) {
    maxValue = Math.max(...input[i]);
    row = i + 1;
    col = input[i].indexOf(Math.max(...input[i])) + 1;
  }
}
console.log(maxValue);
console.log(row, col);
