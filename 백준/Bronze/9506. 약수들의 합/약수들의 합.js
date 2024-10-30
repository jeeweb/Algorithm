let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.pop();

input.map((num) => {
  let result = "";
  const factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) factors.push(i);
  }
  const sum = factors.reduce((a, b) => a + b);
  if (sum === num) {
    result = `${num} = ` + factors.join(" + ");
  } else {
    result = `${num} is NOT perfect.`;
  }
  console.log(result);
});
