const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const white = [1, 1, 2, 2, 2, 8];

const answer = Array.from({ length: white.length }, () => 0);

input.forEach((v, idx) => {
  answer[idx] = white[idx] - v;
});

console.log(answer.join(" "));
