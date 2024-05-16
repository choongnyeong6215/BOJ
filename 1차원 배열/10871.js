const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0].split(" ")[0]);
const x = Number(input[0].split(" ")[1]);

const arr = input[1].split(" ").map((v) => Number(v));

const answer = [];

arr.forEach((item) => {
  if (item < x) answer.push(item);
});

console.log(answer.join(" "));
