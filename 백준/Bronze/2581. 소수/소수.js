let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [m, n] = input;
let primeNums = [];

for (let i = m; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (j * j > i) {
      primeNums.push(i);
      break;
    }
    if (i % j === 0) {
      break;
    }
  }
}

if (primeNums.length === 0) {
    console.log(-1);
} else {
    console.log(primeNums.reduce((a, b) => a + b));    
    console.log(primeNums[0]);
}
