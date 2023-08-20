const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const ballNum = parseInt(input[0].split(" ")[1]);
const basketNum = parseInt(input[0].split(" ")[0]);
const basketArr = Array(basketNum).fill(0);

for (let i = 1; i <= ballNum; i++) {
  let arr = input[i].split(" ");
  let startNum = Number(arr[0]) - 1;
  let endNum = Number(arr[1]) - 1;
  for (let j = startNum; j <= endNum; j++) {
    basketArr[j] = arr[2];
  }
}
console.log(basketArr.join(" "));
