const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
const orgByte = [];

for (let i = 0; i <= n; i += 4) {
  if (i > 0) orgByte.push("long");
}

orgByte.push("int");

console.log(orgByte.join(" "));
