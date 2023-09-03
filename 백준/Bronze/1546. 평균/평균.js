const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const scoreArr = input[1].split(" ").map(Number);
const maxNum = Math.max(...scoreArr);
const newScoreArr = scoreArr.map((n) => (n / maxNum) * 100);
const newAvgNum =
  newScoreArr.reduce((acc, cur) => acc + cur) / newScoreArr.length;

newAvgNum % 1 === 0
  ? console.log(newAvgNum.toFixed(1))
  : console.log(newAvgNum);
