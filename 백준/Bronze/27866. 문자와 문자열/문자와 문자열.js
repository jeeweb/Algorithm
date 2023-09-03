const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = parseInt(input[1]);
console.log(input[0][num - 1]);
