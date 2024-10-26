let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 1;
let i = 1;
while (i < input) {
  i += 6 * count;
  count++;
}

console.log(count);