const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testNum = Number(input[0]);
let answer = "";

for (let i = 1; i < testNum + 1; i++) {
  let num = input[i].split(" ");
  answer =
    answer +
    `Case #${i}: ${num[0]} + ${num[1]} = ${
      parseInt(num[0]) + parseInt(num[1]) + "\n"
    }`;
}
console.log(answer.trim());