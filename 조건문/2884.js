const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let h = Number(input[0]); // 시
let m = Number(input[1]); // 분

let timer = 45;

while (timer > 0) {
  if (m < timer) {
    h === 0 ? (h = 23) : h--;
    timer -= m;
    m = 60;
  } else {
    m -= timer;

    timer = 0;
  }
}

console.log(`${h} ${m}`);
