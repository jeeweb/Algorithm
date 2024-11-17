let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const max = input[0][1];
const numbers = [...input[1]].sort((a, b) => a - b);
let closest = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];
      if (sum > max) {
        break;
      }
      if (sum > closest) {
        closest = sum;
      }
    }
  }
}
console.log(closest);
