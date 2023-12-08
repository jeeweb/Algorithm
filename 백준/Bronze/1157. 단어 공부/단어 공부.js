const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();
const arr = input.split("");
const count = {};
let max = 0;
let result = "";
arr.forEach((i) => {
  count[i] = (count[i] || 0) + 1;
});
for (const [key, value] of Object.entries(count)) {
  if (value > max) {
    max = value;
    result = key;
  } else if (value === max) {
    result = "?";
  }
}
console.log(result);
