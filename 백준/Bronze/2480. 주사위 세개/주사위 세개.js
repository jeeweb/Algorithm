const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

input.sort((a, b) => b - a);

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if ((a == b && a != c) || (a == c && a != b)) {
  console.log(1000 + a * 100);
} else if (b == c && a != b) {
  console.log(1000 + b * 100);
} else if (a != b && b != c && a != c) {
  console.log(a * 100);
}
