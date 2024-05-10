const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) console.log(">");
if (a < b) console.log("<");
if (a === b) console.log("==");
