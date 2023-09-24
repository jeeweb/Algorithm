const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const totalPieces = [1, 1, 2, 2, 2, 8];
let answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(totalPieces[i] - input[i]);
}
console.log(answer.join(" "));
