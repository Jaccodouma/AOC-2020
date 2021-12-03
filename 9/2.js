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

function findContiguousSet(data, sum) {
  for (let startIndex = 0; startIndex < data.length; startIndex++) {

    let setSize = 1; // Index to be added next

    while (data.slice(startIndex, startIndex + setSize).reduce((p, c) => p + c) < sum) {
      setSize++;
    }

    if (data.slice(startIndex, startIndex + setSize).reduce((p, c) => p + c) == sum) {
      return data.slice(startIndex, startIndex + setSize);
    }
  }
}

export default function solve() {
  let data = getData();

  const preamble = 25;

  let invalidNumber = NaN;

  for (let i = preamble; i < data.length; i++) {// count from preamble to data.length
    if (!isValidNumber(data, i, preamble)) {
      invalidNumber = (data[i]);
      break;
    }
  }

  let contiguousSet = findContiguousSet(data, invalidNumber);
  let answer = Math.min(...contiguousSet)+Math.max(...contiguousSet);

  console.log(answer);
};