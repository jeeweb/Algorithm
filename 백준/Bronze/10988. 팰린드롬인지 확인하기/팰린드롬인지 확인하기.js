const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let backwards = [];

for (let i = 0; i < input.length; i++) {
  backwards.unshift(input[i]);
}
backwards.join("") === input ? console.log(1) : console.log(0);
