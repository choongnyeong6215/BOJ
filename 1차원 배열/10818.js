const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map((v) => Number(v));

console.log(Math.min(...arr), Math.max(...arr));
