const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let cnt = 0;

for (let i = 1; i <= n; i++) {
  let tempArr = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] !== input[i][j + 1]) {
      tempArr.push(input[i][j]);
    }
  }
  const tempSet = new Set(tempArr);

  if (tempArr.length === tempSet.size) cnt++;
}

console.log(cnt);
