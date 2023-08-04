let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let year = Number(input);

year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
  ? console.log("1")
  : console.log("0");
