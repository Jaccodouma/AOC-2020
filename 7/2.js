import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('7/input.txt', 'utf8').split("\r\n").map(str => {
    let [bag, contains] = str.split(' contain ');

    // Split up contains into {bag, amount}
    contains = contains.substr(0, contains.length - 1).split(', ').map(s => {
      return {
        bag: s.match(/([a-z]+ )+bag/)[0],
        amount: parseInt(s.match(/([0-9])*/)[0])||0
      };
    })
    // Remove the 's' from the end of strings if it exists
    bag = bag.match(/([a-z]+ )+bag/)[0];

    return {
      bag,
      contains
    };
  });

  // sort into bag: contains object
  let obj = {};

  arr.forEach(bagArr => {
    obj[bagArr.bag] = bagArr.contains;
  });

  return obj;
}

function countBagsThatContain(data, bag, count = 0) {
  let newCount = count; 
  for (let containedBag in data[bag]) {
    containedBag = data[bag][containedBag];
    for (let i = 0; i < containedBag.amount; i++) {
      newCount = countBagsThatContain(data, containedBag.bag, newCount);
    }
  }
  return newCount+1; 
}

export default function solve() {
  let data = getData();

  const containee = "shiny gold bag";

  let count = countBagsThatContain(data, containee);

  // It's -1 cause the shiny gold bag is counted
  console.log(count-1);
};