const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const newWords = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "@");

console.log(newWords.length);
