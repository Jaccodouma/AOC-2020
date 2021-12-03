import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('5/input.txt', 'utf8').split("\r\n").map(pass => {
    return {
      row: pass.substr(0, 7),
      col: pass.substr(7)
    }
  });

  return arr;
}

function getRowNumber(str) {
  // Turn str into binary number, convert to int
  return parseInt(str.split('').map(c => c == 'B' ? '1' : '0').join(''), 2);
}

function getColNumber(str) {
  return parseInt(str.split('').map(c => c == 'R' ? '1' : '0').join(''), 2);
}

export default function solve() {
  const passports = getData();

  let highestID = 0;

  passports.forEach(passport => {
    const row = getRowNumber(passport.row);
    const col = getColNumber(passport.col);

    let id = row * 8 + col;

    if (id > highestID) highestID = id;
  });

  console.log(highestID);
}