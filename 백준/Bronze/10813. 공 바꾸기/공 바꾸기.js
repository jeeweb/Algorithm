const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const basketNum = parseInt(input[0].split(" ")[0]);
const changeNum = parseInt(input[0].split(" ")[1]);
const basketArr = [];
for (let i = 0; i < basketNum; i++) [(basketArr[i] = i + 1)];

for (let i = 1; i <= changeNum; i++) {
  let temp;
  let arr = input[i].split(" ").map(Number);
  temp = basketArr[arr[0] - 1];
  basketArr[arr[0] - 1] = basketArr[arr[1] - 1];
  basketArr[arr[1] - 1] = temp;
}
console.log(basketArr.join(" "));
