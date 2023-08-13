const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arrLength = parseInt(input[0].trim());
const arrNum = input[1].split(" ").map(Number);
let answer = "";

arrNum.sort((a, b) => {
  return a - b;
});

answer = arrNum[0] + " " + arrNum[arrLength - 1];
console.log(answer);
