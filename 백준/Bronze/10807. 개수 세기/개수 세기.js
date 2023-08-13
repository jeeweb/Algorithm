const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arrNum = input[1].split(" ");
const findNum = input[2];
let countNum = 0;

for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] == findNum) countNum++;
}
console.log(countNum);