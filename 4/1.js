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

function isValidPassport(passport) {
  let requiredFields = [
    "byr", 
    "iyr", 
    "eyr", 
    "hgt", 
    "hcl", 
    "ecl", 
    "pid"
  ];

  let isMissing = requiredFields.some(field => !passport.hasOwnProperty(field)); 

  return !isMissing;
}

export default function solve() {
  const data = getData();

  let count = 0; 

  data.forEach(passport => {
    if (isValidPassport(passport)) {
      count++
    };
  });

  console.log(count); 

}