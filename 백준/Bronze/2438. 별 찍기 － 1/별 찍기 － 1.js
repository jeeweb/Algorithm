const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

let answer = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer.trim());
