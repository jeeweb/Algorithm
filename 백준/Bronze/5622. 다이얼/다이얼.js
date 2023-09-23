const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
const strArr = [
  "",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
  "",
];
let answer = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < strArr.length; j++) {
    for (let k = 0; k < strArr[j].length; k++) {
      if (input[i] === strArr[j][k]) {
        answer += j + 2;
      }
    }
  }
}
console.log(answer);
