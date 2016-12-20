const size = 3005290;

const elves = Array(size).fill(1);
const skipPresentless = (arr, id) => {
  do {
    id = (id + 1) % arr.length;
  } while (arr[id] === 0);
  return id;
}

let stealerId = 0;
let stealeeId = stealerId + 1;

while (elves[stealerId] !== size) {
  elves[stealerId] += elves[stealeeId];
  elves[stealeeId] = 0;
  stealerId = skipPresentless(elves, stealerId);
  stealeeId = skipPresentless(elves, stealerId);
}
console.log(`Elf ${stealerId+1} won with ${elves[stealerId]} presents.`);
