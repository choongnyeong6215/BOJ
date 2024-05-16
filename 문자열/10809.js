const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const answer = [];

for (let i = 97; i <= 122; i++) {
  if (input.includes(String.fromCharCode(i))) {
    answer.push(input.indexOf(String.fromCharCode(i)));
  } else {
    answer.push(-1);
  }
}

console.log(answer.join(" "));
