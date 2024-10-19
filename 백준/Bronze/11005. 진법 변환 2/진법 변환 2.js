let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [num, int] = input;
console.log(num.toString(int).toUpperCase());
