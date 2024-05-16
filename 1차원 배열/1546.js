const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const score = input[1].split(" ").map((v) => Number(v));

const m = Math.max(...score);

const newScore = score.map((v) => (v / m) * 100);

console.log(newScore.reduce((a, c) => a + c, 0) / n);
