const md5 = require('./md5.min.js');
const input = require('./day5-input.js');

let part1 = [];
let part2 = [];
let i = 0;
let found = 0;

while (found < 8) {
  let hash = md5(`${input}${i++}`);
  if (hash.startsWith('00000')) {
    console.log(hash, +hash[5] < 8, hash[6]);
    if (part1.length < 8) {
      part1.push(hash[5]);
    }
    if (+hash[5] < 8 && !part2[+hash[5]]) {
      part2[+hash[5]] = hash[6];
      found ++;
    }
  }
}

console.log('--------------- PART 1 ---------------');
console.log(`password is ${part1}`);

console.log('--------------- PART 2 ---------------');
console.log(`password is ${part2}`);
