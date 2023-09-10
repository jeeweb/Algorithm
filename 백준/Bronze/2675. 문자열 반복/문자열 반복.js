const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  let testArr = input[i].split(" ");
  let answer = "";
  for (let j = 0; j < testArr[1].length; j++) {
    if (testArr[1][j] === "\\") {
      answer += testArr[1][j].repeat(Number(testArr[0]) + 1);
    } else {
      answer += testArr[1][j].repeat(Number(testArr[0]));
    }
  }
  console.log(answer);
}
