const input = require('./day18-input.js');

const NUM_ROW = 40;
const possibleTraps = [
    '^^.'
  , '.^^'
  , '^..'
  , '..^'
];
const isTrap = (input) => possibleTraps.includes(input);

let rowCount = 1;
let row = input;
let safeTiles = row
                .split('')
                .reduce((total, x) => x === '.' ? total+1 : total, 0);

while (rowCount < NUM_ROW) {
  console.log(row, safeTiles);
  let nextRow = '';
  for (let i = 0; i < row.length; i++) {
    if (isTrap(`${row[i-1] ? row[i-1] : '.'}${row[i]}${row[i+1] ? row[i+1] : '.'}`)) {
      nextRow += '^';
    } else {
      nextRow += '.';
      safeTiles++;
    }
  }
  row = nextRow;
  rowCount++;
}
console.log(`there are in total ${safeTiles} safe tiles.`);
