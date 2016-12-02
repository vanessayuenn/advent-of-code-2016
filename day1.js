const input = 'L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4'.split(', ');
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

/* part 1 */
let currDirId = 0;      // start with facing north
let [x, y] = [0, 0];

input.forEach((el, i) => {
  currDirId = getNextDir(el.substr(0, 1));
  [x, y] = getNextPos(x, y, currDirId, +el.substr(1));
  // console.log(x,y);
});

console.log('--------------- PART 1 ---------------');
console.log(`final position: ${[x, y]}`);
console.log(`i.e. ${Math.abs(x) + Math.abs(y)} blocks away! 🎉`);


/* part 2 */
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

console.log('--------------- PART 2 ---------------');
console.log(`first position visited twice: ${[x, y]}`);
console.log(`i.e. ${Math.abs(x) + Math.abs(y)} blocks away! 🎉`);
