const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  const arr = [];

  for (let j = 1; j <= input[i]; j++) {
    if (j === input[i]) break;
    if (input[i] % j === 0) arr.push(j);
  }

  const sum = arr.reduce((a, c) => a + c, 0);

  console.log(
    sum === input[i]
      ? `${input[i]} = ${arr.join(" + ")}`
      : `${input[i]} is NOT perfect.`
  );
}
