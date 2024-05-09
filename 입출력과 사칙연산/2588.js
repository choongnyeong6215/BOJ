const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a = Number(input[0]);
const b = input[1].split("");

let first = a * Number(b.pop());
let second = a * Number(b.pop());
let third = a * Number(b.pop());
let fourth = Number(a) * Number(input[1]);

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
