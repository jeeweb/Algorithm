const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.map(Number);
const numArr = [...Array(31).keys()];
numArr.shift();
const answer = [];

for (let i = 0; i < arr.length; i++) {
  let idx = numArr.indexOf(arr[i]);
  numArr.splice(idx, 1);
}
numArr.forEach((n) => console.log(n));
