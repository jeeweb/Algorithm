let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(parseInt(input[0], +input[1]));