const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let x = parseInt(input[0]);
  let y = parseInt(input[1]);
  if (x > 0) {
    console.log(y > 0 ? 1 : 4);
  } else {
    console.log(y > 0 ? 2 : 3);
  }
  process.exit();
});