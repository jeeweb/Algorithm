const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input) / 4;
let initName = "int";
let addString = "long ";

for (let i = 1; i <= num; i++) {
  initName = addString + initName;
}

console.log(initName);