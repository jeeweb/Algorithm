let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let num = input[i].split(" ");
  console.log(Number(num[0]) + Number(num[1]));
}
