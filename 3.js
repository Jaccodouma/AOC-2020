const fs = require('fs');

const I = fs.readFileSync('3.input').toString().split(/\r?\n/);

let x = 0, y = 0, dx = 3, dy = 1;
let trees = 0;

while (y < I.length) {
  if (I[y][x % I[0].length] === '#') trees++;
  x += dx;
  y += dy;
}

console.log('Day 3 - 1' + trees);


let total = 0;

[[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]].forEach((item) => {
  const [dx, dy] = item;
  x = 0; y = 0; trees = 0;
  while (y < I.length) {
    if (I[y][x % I[0].length] === '#') trees++;
    x += dx;
    y += dy;
  }
  total ? total*=trees : total=trees;
})

console.log('Day 3 - 2 ' + total);
