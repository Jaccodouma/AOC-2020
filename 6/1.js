import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('6/input.txt', 'utf8').split("\r\n\r\n").map(d => d.split('\r\n'));
  return arr;
}

function getGroupYesCount(arr) {
  let questions = {}; 

  arr.forEach(person => {
    person.split('').forEach(question => {
      questions[question] = 1; 
    })
  });

  return Object.keys(questions).length;
};

export default function solve() {
  const groups = getData();

  let count = 0; 

  groups.forEach(group => {
    count += getGroupYesCount(group); 
  }); 

  console.log(count);
};