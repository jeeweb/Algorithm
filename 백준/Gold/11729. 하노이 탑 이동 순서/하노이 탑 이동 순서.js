const input = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

let answer = "";

const recursion = (n, from, temp, to) => {
  if (n === 1) {
    answer +=`${from} ${to}\n`;
    return;
  } else {
      recursion(n - 1, from, to, temp);
      answer += `${from} ${to}\n`;
      recursion(n - 1, temp, from, to);    
  }
};

const hanoiTop = (n, from, temp, to) => {
  console.log(2 ** n - 1);
  recursion(n, from, temp, to);
};
hanoiTop(input, 1, 2, 3);
console.log(answer.trim())