const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const dial = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let answer = 0;

for (let item of input) {
  const idx = dial.findIndex((num) => num.includes(item));

  answer += idx + 1;
}

console.log(answer);
