const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) answer.push(i);
}

console.log(answer[k - 1] ? answer[k - 1] : 0);
