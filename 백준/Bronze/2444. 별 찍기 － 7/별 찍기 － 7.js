const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = "";
for (let i = 0; i < input - 1; i++) {
  for (let j = 0; j < input - 1 - i; j++) {
    answer += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    answer += "*";
  }
  answer += "\n";
}
for (let i = 0; i < input; i++) {
  for (let j = 0; j < i; j++) {
    answer += " ";
  }
  for (let k = 0; k < 2 * (input - 1 - i) + 1; k++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer.replace(/\s*$/, ""));