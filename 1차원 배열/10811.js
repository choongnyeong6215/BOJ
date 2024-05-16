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

  const revArr = basket.slice(a - 1, b).reverse();

  basket.splice(a - 1, b - a + 1, ...revArr);
}

console.log(basket.join(" "));
