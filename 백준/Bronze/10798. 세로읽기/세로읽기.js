let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

let maxLength = Math.max(...input.map((i) => i.length));
let result = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || "";
  }
}

console.log(result);
