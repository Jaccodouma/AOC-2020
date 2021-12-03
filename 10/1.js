import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('10/input.txt', 'utf8').split("\r\n").map(s => parseInt(s));

  return arr;
}

export default function solve() {
  let data = getData();

  data.sort((e1, e2) => e1 - e2);
  data = [0, ...data, data[data.length-1] + 3];// add 0 at the start (outlet, data, internal adapter)

  let differences = {};

  for (let i = 1; i < data.length; i++) {
    differences[data[i] - data[i - 1]] = differences[data[i] - data[i - 1]] + 1 || 1;
  }

  console.log(differences['1'] * differences['3']);
};