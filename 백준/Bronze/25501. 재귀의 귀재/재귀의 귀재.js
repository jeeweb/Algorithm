const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
const recursion = (s, l, r) => {
  count++;
  if (l >= r) {
    return 1;
  } else if (s[l] !== s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
};

for (let i = 1; i < input.length; i++) {
  const strArr = input[i].split("");
  const isPalindrome = (s) => {
    count = 0;
    return recursion(s, 0, strArr.length - 1);
  };

  console.log(`${isPalindrome(strArr)} ${count}`);
}
