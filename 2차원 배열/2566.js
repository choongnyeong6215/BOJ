const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const boards = [];

input.forEach((l) => {
  const curLine = l.split(" ").map((v) => Number(v));

  boards.push(curLine);
});

const maxNums = Math.max(...boards.flat());

boards.forEach((board, idx) => {
  if (board.includes(maxNums)) {
    console.log(maxNums);
    console.log(idx + 1, board.findIndex((v) => v === maxNums) + 1);

    return;
  }
});
