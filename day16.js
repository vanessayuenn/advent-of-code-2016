const input = `10001001100000001`;
const length = 272;

const generateData = (data, length) => {
  if (data.length >= length) {
    return data;
  } else {
    let a = data;
    let b = data.split('').reverse().map(elem => elem === '0' ? '1' : '0').join('');
    return generateData(`${a}0${b}`, length);
  }
}
const checksumPair = (pair) => pair[0] === pair[1] ? '1' : '0';

let checksum = generateData(input, length).substr(0, length);
while (checksum && checksum.length % 2 === 0) {
  let checksumArr = [];
  for (let i = 0; i < checksum.length; i+=2) {
    checksumArr.push(checksumPair([checksum[i], checksum[i+1]]));
  }
  checksum = checksumArr.join('');
}

console.log(checksum);
