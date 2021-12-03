import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('9/input.txt', 'utf8').split("\r\n").map(s => parseInt(s));

  return arr;
}

function isValidNumber(data, index, preamble) {
  for (let i1 = preamble; i1 > 0; i1--) {// count from 25 to 0
    for (let i2 = preamble; i2 > 0; i2--) {// count from 25 to 0
      const n1 = data[index - i1];
      const n2 = data[index - i2];
      if (data[index] == n1 + n2) {
        return true;
      }
    }
  }
  return false;
}

export default function solve() {
  let data = getData();

  const preamble = 25;

  for (let i = preamble; i < data.length; i++) {// count from preamble to data.length
    if (!isValidNumber(data, i, preamble)) {
      console.log(data[i]);
      return;
    }

  }
};