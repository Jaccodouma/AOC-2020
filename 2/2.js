import fs from 'fs';

function isValid({min, max, letter, password}) {
  if (
    (password[min-1]==letter || password[max-1]==letter) && 
    !(password[min-1]==letter && password[max-1]==letter)
    
  ) return true; 
  return false; 
}

export default function solve() {

  let data = fs.readFileSync('2/input.txt', 'utf8')
    .split("\r\n")
    .map(line => {
      let arr = line.split(/-|: | /g);
      return {
        min: arr[0],
        max: arr[1],
        letter: arr[2],
        password: arr[3]
      }
    });

  let count = 0; 
  data.forEach(e => {
    if (isValid(e)) count++; 
  });
  
  console.log(count);
}