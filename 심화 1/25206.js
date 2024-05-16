const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalGrade = 0; // 총 평점
let totalCredit = 0; // 총 학점

for (let item of input) {
  const [name, time, rank] = item.split(" ");

  if (rank === "P") continue;

  totalGrade += Number(time) * grades[rank];
  totalCredit += Number(time);
}

const majorAvg = (totalGrade / totalCredit).toFixed(6);

console.log(majorAvg);
