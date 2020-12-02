const fs = require('fs');

const I = fs.readFileSync('2.input').toString().split(/\r?\n/);

let validPasswords1 = 0; 
I.forEach(item => {
  const [min, max, char, pass] = item.split(/: | |-/);
  const charsInPWArr = pass.match(new RegExp(char, 'g'));
  const charsInPW = charsInPWArr ? charsInPWArr.length : 0;
  if (min <= charsInPW && charsInPW <= max) validPasswords1++;
});
console.log(`Day 2 - 1: Valid passwords: ${validPasswords1}`);

let validPasswords2 = 0; 
I.forEach(item => {
  const [i1, i2, char, pass] = item.split(/: | |-/);
  if ([pass[i1-1],pass[i2-1]].filter(c => c==char).length==1) validPasswords2++;
});
console.log(`Day 2 - 2: Valid passwords: ${validPasswords2}`);