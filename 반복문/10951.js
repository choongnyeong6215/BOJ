const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const curLine = input[i].split(" ");

  console.log(Number(curLine[0]) + Number(curLine[1]));
}
