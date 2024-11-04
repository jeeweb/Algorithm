let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let num = +input;
const result = [];
for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    result.push(i);
    num = Math.floor(num / i);
  }
}
result.forEach((a) => console.log(a));