let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let dots = 2;
for (let i = 0; i < +input; i++) {
  dots += Math.pow(2, i);
}
console.log(Math.pow(dots, 2));
