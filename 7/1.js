import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('7/input.txt', 'utf8').split("\r\n").map(str => {
    let [bag, contains] = str.split(' contain ');

    // Split up contains, also remove the number as it's unused
    contains = contains.substr(0, contains.length - 1).split(', ').map(s => s.match(/([a-z]+ )+bag/)[0]);

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

function canContainBag(data, container, containee) {
  if (!data.hasOwnProperty(container)) return false; // mainly for "no other bags"
  if (data[container].includes(containee)) return true;

  for (const bag in data[container]) {
    if (canContainBag(data, data[container][bag], containee)) {
      return true;
    }
  }

  return false;
}

export default function solve() {
  let data = getData();
  // console.log(data);

  const containee = "shiny gold bag";
  let count = 0;

  Object.keys(data).forEach(bag => {
    // count++;
    if (canContainBag(data, bag, containee)) count++;
  });

  console.log(count);
};