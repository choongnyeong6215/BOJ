const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const firstLine = input[0].split(" ").map((v) => Number(v));
const n = firstLine[0];
const m = firstLine[1];

const basket = Array.from({ length: n }, () => 0);

for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map((v) => Number(v));

  for (let j = a - 1; j < b; j++) {
    basket[j] = c;
  }
}

console.log(basket.join(" "));
