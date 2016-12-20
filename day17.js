const md5 = require('./md5.min.js');
const input = `ioramepc`;

let path = [];
const isOpen = (ch) => ['b','c','d','e','f'].includes(ch);
const isValidMove = (x, y) => x > -1 && x < 4 && y > -1 && y < 4;

const dir = ['U','D','L','R'];
const newPos = (x, y, dir) => {
  switch (dir) {
    case 'U':
      return [x, y-1];
    case 'D':
      return [x, y+1];
    case 'L':
      return [x-1, y];
    case 'R':
      return [x+1, y];
    default:
      return;
  }
}

const move = (x, y, str) => {
  let hash = (md5(str)).substr(0, 4);
  if (x === 3 && y === 3) {
    path.push(str.substr(input.length));
    return;
  }
  for (let i = 0; i < hash.length; i++) {
    if (isOpen(hash[i])) {
      let [x2, y2] = newPos(x, y, dir[i]);
      if (isValidMove(x2, y2)) {
        move(x2, y2, str+dir[i]);
      }
    }
  }
}

move(0, 0, input);

console.log('--------------- PART 1 ---------------');
const shortest = path.reduce((a, b) => a.length < b.length ? a : b);
console.log(`Shortest path is ${shortest}.`);

console.log('--------------- PART 2 ---------------');
const longest = path.reduce((a, b) => a.length > b.length ? a : b);
console.log(`Longest path is ${longest}.`);
console.log(`It contains ${longest.length} steps.`);
