import chalk from 'chalk';
import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('10/input.txt', 'utf8').split("\r\n").map(s => parseInt(s));

  return arr;
}

let counts = {}; 

function countArrangements(data, index, count = 0) {

  // If reached the end, add 1 
  if (index >= data.length-1) { 
    return count + 1;
  };

  // If paths counts from this index are known, add them
  if (counts[index]) {
    return count + counts[index];
  }

  // Recursive call for each available adapter
  let checkIndex = index + 1;
  while ((data[checkIndex] - data[index]) <= 3) {
    count = countArrangements(data, checkIndex, count);
    checkIndex++;
  }

  // Set the counts for this index (amount of paths from here)
  counts[index] = count; 
  return count;
}

export default function solve() {
  let data = getData();

  data.sort((e1, e2) => e1 - e2);
  data = [0, ...data, data[data.length - 1] + 3];// add 0 at the start (outlet, data, internal adapter)

  const answer = countArrangements(data, 0);

  console.log(answer);
};