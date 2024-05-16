const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((v) => Number(v));
input.shift();

const basket = Array.from({ length: n }, (v, i) => i + 1);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map((v) => Number(v));

  const prevBall = basket[a - 1];
  const nextBall = basket[b - 1];

  basket.splice(a - 1, 1, nextBall);
  basket.splice(b - 1, 1, prevBall);
}

console.log(basket.join(" "));
