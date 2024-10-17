let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number))
  .slice(1);

let count = 0;
const coordinate = Array.from(Array(100), () => Array(100).fill(0));

input.forEach((arr) => {
  const [x, y] = arr;
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (coordinate[i][j] === 1) {
        continue;
      }
      coordinate[i][j] = 1;
      count++;
    }
  }
});
console.log(count);