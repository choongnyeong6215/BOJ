const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

const n = 2 * input - 1;

for (let i = 1; i <= n; i += 2) {
  const blank = Math.floor(n - i) / 2;
  const answer = " ".repeat(blank) + "*".repeat(i);

  console.log(answer);

  if (i === n) {
    for (let j = n - 2; j >= 1; j -= 2) {
      const blank = Math.floor(n - j) / 2;
      const answer = " ".repeat(blank) + "*".repeat(j);

      console.log(answer);
    }
  }
}
