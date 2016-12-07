const input = require('./day6-input').split('\n');

let count = Array(input[0].length).fill(0).map(() => new Object());
let line = input[0];
let msg1 = []
let msg2 = []
input.map(line => {
  for (i in line) {
    count[i][line[i]] = (count[i][line[i]] || 0) + 1;
  }
});
count.map(col => {
  msg1.push(Object.keys(col).reduce((a, b) => col[a] > col[b] ? a : b));
  msg2.push(Object.keys(col).reduce((a, b) => col[a] < col[b] ? a : b));
});
console.log('--------------- PART 1 ---------------');
console.log(`message is ${msg1}`);

console.log('--------------- PART 2 ---------------');
console.log(`message is ${msg2}`);
