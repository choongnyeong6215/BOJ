const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1]
  .split("")
  .reduce((accr, curv) => Number(accr) + Number(curv), 0);

console.log(arr);
