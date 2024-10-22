let fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();
const coins = [25, 10, 5, 1];
for (let i = 0; i < input.length; i++) {
  const result = [0, 0, 0, 0];
  for (let j = 0; j < coins.length; j++) {
    if (input[i] >= coins[j]) {
      result[j] = Math.floor(input[i] / coins[j]);
      input[i] = input[i] % coins[j];
    }
  }
  console.log(result.join(" "));
}
