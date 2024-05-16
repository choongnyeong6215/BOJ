const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map((v) => Number(v));
const v = Number(input[2]);

let cnt = 0;

arr.forEach((item) => {
  if (item === v) cnt++;
});

console.log(cnt);
