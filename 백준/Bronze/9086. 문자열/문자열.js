const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    const wordLength = input[i].length;
    console.log(input[i][0] + input[i][wordLength - 1]);
  }
}
