const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const totalCost = Number(input[0]);
const totalNum = Number(input[1]);

let sum = 0;

for (let i = 2; i <= totalNum + 1; i++) {
  let item = input[i].split(" ");
  sum += item[0] * item[1];
}

console.log(totalCost === sum ? "Yes" : "No");