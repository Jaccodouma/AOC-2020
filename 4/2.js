import fs from 'fs';

// Put data into array of key:value "passports"
function getData() {
  return fs.readFileSync('4/input.txt', 'utf8')
    .split('\r\n\r\n') // Split into "passports"
    .map(d => {
      let arr = d.split(/ |\r\n/g);

      let p = {};
      arr.forEach(e => {
        let [key, data] = e.split(':');
        p[key] = data;
      });
      return p;
    })
}

function isValidBYR(str) {
  return /^[0-9]{4}$/g.test(str) && (1920 <= parseInt(str) && parseInt(str) <= 2002);
};

function isValidIYR(str) {
  return /^[0-9]{4}$/g.test(str) && (2010 <= parseInt(str) && parseInt(str) <= 2020);
};

function isValidEYR(str) {
  return /^[0-9]{4}$/g.test(str) && (2020 <= parseInt(str) && parseInt(str) <= 2030);
};

function isValidHGT(str) {
  return (/^(((1[5-8][0-9])|(19[0-3]))cm)$|^(((59)|(6[0-9])|(7[0-6]))in)$/g.test(str));
};

function isValidHCL(str) {
  return (/^#[0-9|a-f]{6}$/g.test(str));
};

function isValidECL(str) {
  return (/^(amb|blu|brn|gry|grn|hzl|oth)$/g.test(str));
};

function isValidPID(str) {
  return (/^[0-9]{9}$/g.test(str));
};

function isValidPassport(passport) {
  let requiredFields = [
    ["byr", isValidBYR],
    ["iyr", isValidIYR],
    ["eyr", isValidEYR],
    ["hgt", isValidHGT],
    ["hcl", isValidHCL],
    ["ecl", isValidECL],
    ["pid", isValidPID]
  ];

  let hasInvalidOrMissingProperty = requiredFields.some(([field, isValid]) => {
    let propertyIsValid = passport.hasOwnProperty(field) && isValid(passport[field]);
    return !propertyIsValid;
  });

  return !hasInvalidOrMissingProperty;
};

export default function solve() {
  const data = getData();
  let count = 0;

  data.forEach(passport => {
    if (isValidPassport(passport)) count++
  });

  console.log(count);
};