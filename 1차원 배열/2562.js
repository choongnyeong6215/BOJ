const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const maxNumIdx = input.findIndex((v) => v === Math.max(...input));

console.log(input[maxNumIdx]);
console.log(maxNumIdx + 1);
