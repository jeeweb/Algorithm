let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => num.split(" ").map(Number));

const k = input[0][1] - 1;
const sortedScores = input[1].sort((a, b) => b - a);

console.log(sortedScores[k]);
