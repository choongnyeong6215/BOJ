const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

let cnt = 0;
const arr = input[1].split(" ").map(Number);

for (let i = 0; i < Number(input[0]); i++) {
  if (isPrime(arr[i])) cnt++;
}

console.log(cnt);
