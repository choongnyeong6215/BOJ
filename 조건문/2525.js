const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[1]);

let h = Math.floor((a * 60 + b + c) / 60);
let m = (a * 60 + b + c) % 60;

if (h >= 24) h -= 24;

console.log(`${h} ${m}`);
