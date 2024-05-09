const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let sum = 0;

for (let item of input) {
  sum += Number(item);
}

console.log(sum);
