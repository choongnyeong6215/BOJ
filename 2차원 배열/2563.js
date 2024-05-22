const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const boards = Array.from(Array(100), () => Array(100).fill(0));
const papers = input.slice(1).map((v) => v.split(" ").map(Number));

let bArea = 0;

papers.forEach((v) => {
  const [x, y] = v;

  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (boards[i][j] === 1) continue;

      boards[i][j] = 1;
      bArea++;
    }
  }
});

console.log(bArea);
