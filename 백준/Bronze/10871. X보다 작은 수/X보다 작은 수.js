const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = parseInt(input[0].split(" ")[1]);
const arrNum = input[1].split(" ");

let answer = "";

for (let i = 0; i < arrNum.length; i++) {
  if (Number(arrNum[i]) < num) {
    answer += arrNum[i] + " ";
  }
}
console.log(answer);
