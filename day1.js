const input = require('./day1-input.js').split(', ');

const getNextDir = (turn) =>
  (4 + (turn === 'R' ? currDirId + 1 : currDirId - 1)) % 4;
const getNextPos = (x, y, dir, steps) => {
  switch (dir) {
    case 0:   // north
      y += steps;
      break;
    case 1:   // east
      x += steps;
      break;
    case 2:   // south
      y -= steps;
      break;
    case 3:   // west
      x -= steps;
      break;
  }
  return [x, y];
}
const stepByStep = (x, y, dir, steps) => {
  let pos;
  for (let i = 0; i < steps; i++) {
    switch (dir) {
      case 0:   // north
        y ++;
        break;
      case 1:   // east
        x ++;
        break;
      case 2:   // south
        y --;
        break;
      case 3:   // west
        x --;
        break;
    }
    pos = `${x}, ${y}`;
    if (!visited.has(pos)) {
      visited.set(pos, true);
    } else {
      return {visited: [x, y]};
    }
  }
  return [x, y];
}

console.log('--------------- PART 1 ---------------');

let currDirId = 0;      // start with facing north
let [x, y] = [0, 0];

input.forEach((el, i) => {
  currDirId = getNextDir(el.substr(0, 1));
  [x, y] = getNextPos(x, y, currDirId, +el.substr(1));
  // console.log(x,y);
});

console.log(`final position: ${[x, y]}`);
console.log(`i.e. ${Math.abs(x) + Math.abs(y)} blocks away! 🎉`);


console.log('--------------- PART 2 ---------------');

currDirId = 0;
[x, y] = [0, 0];
let visited = new Map();
let pos;

input.find((el, i) => {
  currDirId = getNextDir(el.substr(0, 1));
  pos = stepByStep(x, y, currDirId, +el.substr(1));
  if (Array.isArray(pos)) {
    [x, y] = pos;
  } else {
    [x, y] = pos.visited;
    return true;
  }
});

console.log(`first position visited twice: ${[x, y]}`);
console.log(`i.e. ${Math.abs(x) + Math.abs(y)} blocks away! 🎉`);
