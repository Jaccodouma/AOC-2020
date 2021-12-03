import fs from 'fs';

export default function solve() {
  let arr = fs.readFileSync('1/input.txt', 'utf8').split("\r\n").map(i => parseInt(i));

  for (const i1 of arr) {
    for (const i2 of arr) {
      if (i1 + i2 == 2020) {
        console.log(i1 * i2);
        return;
      }
    }
  }
}