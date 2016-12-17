const input = require('./day7-input.js').split('\n');

const hasABBA = (str) => {
  for (let i = 0; i < str.length - 3; i++) {
    let sub = str.substr(i, 4);
    if (sub[0] !== sub[1] && sub === sub.split('').reverse().join('')) {
      return true;
    }
  }
  return false;
}

console.log('--------------- PART 1 ---------------');
let supportsTSL = [];

for (i in input) {
  let reg = /\[([a-z]+)\]/g;
  let sq = reg.exec(input[i]);              // capture what's inside square brackets
  let rest = input[i].split(/\[[a-z]+\]/);  // capture ones outside of sq brackets
  let sqHasABBA = false;
  let restHasABBA = false;
  while (sq !== null && !sqHasABBA) {
    sqHasABBA = hasABBA(sq[1]);
    sq = reg.exec(input[i]);
  }
  if (!sqHasABBA) {
    for (r in rest) {
      restHasABBA = hasABBA(rest[r]);
      if (restHasABBA) {
        supportsTSL.push(input[i]);
        break;
      }
    }
  }
}

console.log(supportsTSL.length);
