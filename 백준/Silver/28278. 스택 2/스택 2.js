let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el.slice(0, 1) === "1" ? el.split(" ").map(Number) : Number(el)
  );
input.shift();

const stack = [];
let result = "";
input.forEach((el) => {
  //console.log("el: ", el, "stack: ", stack);
  if (el[0] === 1) {
    stack.push(el[1]);
  } else {
    switch (el) {
      case 2:
        if (stack.length > 0) {
          result += stack[stack.length - 1];
          result += "\n";
          stack.pop();
        } else {
          result += -1;
          result += "\n";
        }
        break;
      case 3:
        result += stack.length;
        result += "\n";
        break;
      case 4:
        result += stack.length > 0 ? 0 : 1;
        result += "\n";
        break;
      case 5:
        result += stack.length > 0 ? stack[stack.length - 1] : -1;
        result += "\n";
        break;
    }
  }
});
console.log(result.trim());
