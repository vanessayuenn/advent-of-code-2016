const input = require('./day2-input.js').split('\n');

console.log('--------------- PART 1 ---------------');

let code = [];
let [xMin, xMax, yMin, yMax] = [0, 2, 0, 2];
let [x, y] = [1, 1];

const moves = {
  U: (x, y) => [x, (y-1 < yMin ? y : y-1)],
  D: (x, y) => [x, (y+1 > yMax ? y : y+1)],
  R: (x, y) => [(x+1 > xMax ? x : x+1), y],
  L: (x, y) => [(x-1 < xMin ? x : x-1), y]
}
const mapToCode = (x, y) => 3 * y + x + 1;

input.forEach(instruction => {
  instruction.split('').forEach(el => [x, y] = moves[el](x, y));
  code.push(mapToCode(x, y));
});

console.log(`💩🙊 the bathroom code is ${code}.`);


console.log('--------------- PART 2 ---------------');

const keypad = [
  [null, null, '1', null, null],
  [null, '2', '3', '4', null],
  ['5', '6', '7', '8', '9'],
  [null, 'A', 'B', 'C', null],
  [null, null, 'D', null, null]
];
code = [];
[x, y] = [1, 1];
[xMin, xMax, yMin, yMax] = [0, keypad[0].length - 1, 0, keypad.length - 1];

const moves2 = {
  U: (x, y) => [x, ((y-1 < yMin || !keypad[y-1][x]) ? y : y-1)],
  D: (x, y) => [x, ((y+1 > yMax || !keypad[y+1][x]) ? y : y+1)],
  R: (x, y) => [((x+1 > xMax || !keypad[y][x+1]) ? x : x+1), y],
  L: (x, y) => [((x-1 < xMin || !keypad[y][x-1]) ? x : x-1), y]
}

input.forEach(instruction => {
  instruction.split('').forEach(el => [x, y] = moves2[el](x, y));
  code.push(keypad[y][x]);
});

console.log(`💩🙊 the bathroom code is ${code}.`);
