const input = require('./day4-input.js').split('\n');

let sectorIdSum = 0;
let validRooms = [];

console.log('--------------- PART 1 ---------------');

input.map(line => {
  let letters, sectorId, checksum, letterArr, isValid;
  let letterMap = new Map();
  line.replace(
    /([-|a-zA-Z]*)-([\d]+)\[([a-zA-Z]+)\]/g,
    (match, p1, p2, p3) => [letters, sectorId, checksum] = [p1, p2, p3]
  );

  for (let i = 0; i < letters.length; i++) {
    let c = letters.charAt(i);
    if (c !== '-') {
      if (!letterMap.get(c)) {
        letterMap.set(c, 1);
      } else {
        letterMap.set(c, letterMap.get(c)+1);
      }
    }
  }

  // letterArr contains [ letter, count ] pairs e.g. [ 'a', 3 ]
  letterArr = Array.from(letterMap.entries()).sort((a, b) => {
    if (b[1] - a[1] !== 0) {        // if letter counts not equal
      return b[1] - a[1];           // sort numerically
    } else {                        // otherwise sort alphabetically
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
  });

  isValid = true;
  for (let i = 0; i < checksum.length; i++) {
    if (checksum.charAt(i) !== letterArr[i][0]) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    validRooms.push({
      name: letters,
      sectorId: sectorId
    });
    sectorIdSum += +sectorId;
  }
});

console.log(`Sum of sector ID's is... ${sectorIdSum}! 🎉`);


console.log('--------------- PART 2 ---------------');
const offset = 'a'.charCodeAt(0);

validRooms.map(room => {
  let newCharCodes = [];
  for (let i = 0; i < room.name.length; i++) {
    if (room.name.charAt(i) !== '-') {
      newCharCodes.push(
        (room.name.charCodeAt(i) - offset + (+room.sectorId)) % 26 + offset
      );
    } else {
      newCharCodes.push(' '.charCodeAt(0));
    }
  }
  room.realName = String.fromCharCode.apply(this, newCharCodes);
  if (room.realName === 'northpole object storage') {
    console.log(`Found it! ${room.realName} is in sector ${room.sectorId}! 🎉`)
  }
  return room;
});
