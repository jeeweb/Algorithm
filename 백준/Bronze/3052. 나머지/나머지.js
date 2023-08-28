const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numArr = input.map(Number);
const restArr = numArr.map((n) => n % 42);

const uniqArr = restArr.filter((e, idx) => {
  return restArr.indexOf(e) === idx;
});
console.log(uniqArr.length);