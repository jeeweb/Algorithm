const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
