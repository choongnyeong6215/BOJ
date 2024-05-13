const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const x = Number(input[0]);
const n = Number(input[1]);
let sum = 0;

for (let i = 0; i < 2; i++) {
  input.shift();
}

for (let i = 0; i < input.length; i++) {
  const curLine = input[i].split(" ");

  sum += Number(curLine[0] * curLine[1]);
}

sum === x ? console.log("Yes") : console.log("No");
