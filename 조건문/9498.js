const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const res = Number(input);

if (res >= 90 && res <= 100) console.log("A");
else if (res >= 80 && res < 90) console.log("B");
else if (res >= 70 && res < 80) console.log("C");
else if (res >= 60 && res < 70) console.log("D");
else console.log("F");
