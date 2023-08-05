let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let [h, m] = input;
if (m - 45 < 0) {
  if (h == 0) {
    console.log(`23 ${60 + (m - 45)}`);
  } else {
    console.log(`${h - 1} ${60 + (m - 45)}`);
  }
} else {
  console.log(`${h} ${m - 45}`);
}
