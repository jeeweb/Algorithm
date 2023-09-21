const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const numA = input[0].split("").reverse().join("");
const numB = input[1].split("").reverse().join("");

Number(numA) - Number(numB) > 0 ? console.log(numA) : console.log(numB);
