import fs from 'fs';

function getData() {
  let arr = fs.readFileSync('8/input.txt', 'utf8').split("\r\n").map(s => {
    return {
      action: s.match(/([a-z])*/)[0],
      amount: parseInt(s.match(/(\+|\-)[0-9]*/)[0]),
      executed: false // to keep track of how often this instruction has been executed
    }
  });

  return arr;
}

export default function solve() {
  let data = getData();

  let accumulator = 0;
  let instructionCount = 0;

  while (true) {
    // If instruction.executed == false, log and return 
    if (data[instructionCount].executed) {
      console.log(accumulator);
      return;
    }

    // instruction.executed = true
    data[instructionCount].executed = true;

    // execute instruction 
    switch (data[instructionCount].action) {
      case 'jmp':
        instructionCount+=data[instructionCount].amount;
        break;
      case 'acc':
        accumulator+=data[instructionCount].amount;
      default: // for acc and nop
      instructionCount++; 
    }
  }
};