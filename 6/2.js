import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('6/input.txt', 'utf8').split("\r\n\r\n").map(d => d.split('\r\n'));
  return arr;
}

function getGroupYesCount(arr) {
  let questions = {};
  let groupCount = arr.length;

  arr.forEach(person => {
    person.split('').forEach(question => {
      if (questions.hasOwnProperty(question)) {
        questions[question] += 1;
      } else {
        questions[question] = 1;
      }
    })
  });

  // Filter keys where it isn't groupCount
  Object.keys(questions).forEach(q => {
    if (questions[q] != groupCount) {
      delete questions[q]
    }
  })

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