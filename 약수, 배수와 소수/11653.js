let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let num = 2;
const answer = [];

while (n !== 1) {
  if (n % num === 0) {
    answer.push(num);
    n /= num;
  } else num++;
}

console.log(answer.join("\n"));
