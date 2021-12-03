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

  passports.forEach(passport => {
    const row = getRowNumber(passport.row);
    const col = getColNumber(passport.col);

    let id = row * 8 + col;

    passport['id'] = id;
  });

  passports.sort((p1, p2) => p1.id - p2.id);

  let expectedId = passports[0].id;

  passports.forEach(passport => {
    if (
      passport.id != expectedId &&
      expectedId == passport.id - 1
    ) {
      console.log(expectedId);
      return;
    };
    expectedId++;
  })
}