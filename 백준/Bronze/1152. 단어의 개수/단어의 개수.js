const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

if (input[0] === "") {
  input.pop();
}
console.log(input.length);
