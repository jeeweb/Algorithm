const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let inputArr = input[i].split(" ");
  let [num1, num2] = inputArr;
  if (Number(num1) == 0 && Number(num2) == 0) {
    break;
  }
  console.log(Number(num1) + Number(num2));
}
