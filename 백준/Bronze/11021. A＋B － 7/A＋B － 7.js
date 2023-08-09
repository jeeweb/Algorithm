const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testNum = Number(input[0]);
let answer = "";

for (let i = 1; i < testNum + 1; i++) {
  let num = input[i].split(" ");
  answer = answer + `Case #${i}: ${Number(num[0]) + Number(num[1])}` + "\n";
}
console.log(answer.trim());
