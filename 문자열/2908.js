const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const arr = input.map((v) => Number(v.split("").reverse().join("")));

console.log(Math.max(...arr));
