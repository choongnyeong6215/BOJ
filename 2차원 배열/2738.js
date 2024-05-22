const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const firstLine = input[0].split(" ");
const n = Number(firstLine[0]);
const m = Number(firstLine[1]);

for (let i = 1; i <= n; i++) {
  const curLine = input[i].split(" ").map((v) => Number(v));
  const mulLine = input[i + n].split(" ").map((v) => Number(v));
  let results = [];
  for (let j = 0; j < curLine.length; j++) {
    results.push(curLine[j] + mulLine[j]);
  }
  console.log(results.join(" "));
}
