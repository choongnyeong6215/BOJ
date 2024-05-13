const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const curLine = input[i].split(" ");
  console.log(Number(curLine[0]) + Number(curLine[1]));
}
