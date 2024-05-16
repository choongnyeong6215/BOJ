const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const map = new Map();

for (let i = 0; i < input.length; i++) {
  if (map.has(input[i].toLowerCase()))
    map.set(input[i].toLowerCase(), map.get(input[i].toLowerCase()) + 1);
  else map.set(input[i].toLowerCase(), 1);
}

const freq = [...map.values(map)];
const mostFreq = Math.max(...freq);

for (let [key, value] of map) {
  if (value < mostFreq) map.delete(key);
}

map.size > 1
  ? console.log("?")
  : console.log([...map.keys(map)][0].toUpperCase());
