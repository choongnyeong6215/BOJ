const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

input.sort((a, b) => a - b);

const answer = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) console.log(i);
}
