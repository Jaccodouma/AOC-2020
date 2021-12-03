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

  for (const instructionToChange in data) {
    let accumulator = 0;
    let instructionCount = 0;

    // Reset executed
    data.map(instruction => {
      instruction.executed = false; 
      return instruction; 
    })

    // Run instructions
    let loops = false; 
    while (!loops) {
      // terminated!
      if (instructionCount >= data.length) {
        console.log(`Program terminated with an accumulator value of ${accumulator}`)
        return;
      }

      // If instruction.executed == false, log and return 
      console.log(data[instructionCount])
      if (data[instructionCount].executed) {
        console.log(`Program loops with ${instructionToChange} changed at instruction ${instructionCount}`);
        loops = true;
        continue;
      }

      // instruction.executed = true
      data[instructionCount].executed = true;

      let action = data[instructionCount].action;
      if (instructionCount == instructionToChange) {
        if (action == 'nop') { action = 'jmp' } else { action = 'nop' };
      }

      // execute instruction 
      switch (action) {
        case 'jmp':
          instructionCount += data[instructionCount].amount;
          break;
        case 'acc':
          accumulator += data[instructionCount].amount;
        default: // for acc and nop
          instructionCount++;
      }
    }
  }

};