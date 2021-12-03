import fs from 'fs';

export function treesEncountered(dx, dy) {
  let arr = fs.readFileSync('3/input.txt', 'utf8').split("\r\n");

  let x = 0; 
  let y = 0; 
  let trees = 0; 

  while (y < arr.length) {
    if (arr[y][x%(arr[0].length)] == "#") trees++; 
    x+=dx; 
    y+=dy;
  }

  return trees; 
}

export default function solve() {
  console.log(treesEncountered(3,1));
}