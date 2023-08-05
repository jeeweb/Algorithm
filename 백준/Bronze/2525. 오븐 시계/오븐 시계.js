let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let current = input[0].split(" ");
let h = Number(current[0]);
let m = Number(current[1]);
let cook = Number(input[1]);

if (cook >= 60) {
  if (m + (cook % 60) == 60) {
    console.log(`${(h + parseInt(cook / 60) + 1) % 24} 0`);
  } else if (m + (cook % 60) > 60) {
    console.log(
      `${(h + parseInt(cook / 60) + 1) % 24} ${m + (cook % 60) - 60}`
    );
  } else {
    console.log(`${(h + parseInt(cook / 60)) % 24} ${m + (cook % 60)}`);
  }
} else {
  if (cook + m == 60) {
    console.log(`${(h + 1) % 24} 0`);
  } else if (cook + m > 60) {
    console.log(`${(h + 1) % 24} ${m + cook - 60}`);
  } else {
    console.log(`${h % 24} ${m + cook}`);
  }
}
