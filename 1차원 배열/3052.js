const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const answer = new Set();

input.forEach((v) => {
  answer.add(v % 42);
});

console.log(answer.size);
