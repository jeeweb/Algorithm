let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const xValues = input.map((arr) => arr[0]).sort();
const yValues = input.map((arr) => arr[1]).sort();

const x = xValues[0] === xValues[1] ? xValues[2] : xValues[0];
const y = yValues[0] === yValues[1] ? yValues[2] : yValues[0];

console.log(x, y);
