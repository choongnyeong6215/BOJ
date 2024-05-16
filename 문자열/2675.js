const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const [r, s] = input[i].split(" ");

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    answer += s[i].repeat(Number(r));
  }

  console.log(answer);
}
