const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const arrLength = "z".charCodeAt() - "a".charCodeAt() + 1;
let alphabetArr = Array(arrLength).fill(-1);

for (let i = 0; i < input.length; i++) {
  let num = input[i].charCodeAt() - "a".charCodeAt();
  if (alphabetArr[num] == -1) {
    alphabetArr[num] = i;
  }
}
console.log(alphabetArr.join(" "));
