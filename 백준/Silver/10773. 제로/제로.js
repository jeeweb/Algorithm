let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();
const arr = [];
input.forEach((num) => {
  num === 0 ? arr.pop() : arr.push(num);
});

const total = arr.reduce((a, b) => (a += b), 0);
console.log(total);
