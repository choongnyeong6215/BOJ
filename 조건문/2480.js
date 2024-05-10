const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const [a, b, c] = input;

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b && b !== c) {
  console.log(1000 + a * 100);
} else if (b === c && a !== b) {
  console.log(1000 + b * 100);
} else if (a === c && b !== c) {
  console.log(1000 + c * 100);
} else {
  console.log(Math.max(...input) * 100);
}
