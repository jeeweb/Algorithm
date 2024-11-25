let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

input.shift();
let result = "";

input.forEach((arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      result += "NO";
      break;
    }
  }
  if (count === 0) {
    result += "YES";
  }
  if (count > 0) {
    result += "NO";
  }
  result += "\n";
});
console.log(result.trim());
