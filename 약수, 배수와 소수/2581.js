const [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const answer = [];

for (let i = m; i <= n; i++) {
  if (isPrime(i)) answer.push(i);
}

console.log(
  answer.length ? answer.reduce((a, c) => a + c, 0) + "\n" + answer[0] : -1
);
