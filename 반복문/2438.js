const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
let answer = "";

for (let i = 1; i <= n; i++) {
  answer = "*".repeat(i);
  console.log(answer);
}
