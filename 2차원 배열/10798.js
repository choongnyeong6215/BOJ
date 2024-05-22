const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const lenArr = input.map((v) => v.length);
const maxLen = Math.max(...lenArr);
let answer = "";

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;

    answer += input[j][i];
  }
}

console.log(answer);
