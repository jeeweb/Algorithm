let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const filtered = [...new Set(input)].sort().sort((a, b) => a.length - b.length);
filtered.forEach((st) => console.log(st));
