const fs = require('fs');

const I = fs.readFileSync('1.input').toString().split(/\r?\n/).map(n=>+n);

console.log("Day 1 - 1");
I.find(e => {
  I.find(e2 => {
    if(e+e2==2020) {
      console.log(`${e} + ${e2} = ${e+e2} ::: ${e*e2}`);
    };
  })
}) 

console.log("Day 1 - 2");
I.find(e => {
  I.find(e2 => {
    I.find(e3 => {
      if(e+e2+e3==2020) {
        console.log(`${e} + ${e2} + ${e3} = ${e+e2+e3} ::: ${e*e2*e3}`);
      };
    })
  })
}) 