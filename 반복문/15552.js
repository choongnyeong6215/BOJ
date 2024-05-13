const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
let answer = "";

for (let i = 1; i <= t; i++) {
  const curLine = input[i].split(" ");

  answer += Number(curLine[0]) + Number(curLine[1]) + "\n";

  //   console.log(Number(curLine[0]) + Number(curLine[1]));
}

console.log(answer);
