const input = require('./day3-input');

const parse = input
              .split('\n')
              .map(v => [
                  +(v.substr(-13, 3).trim())
                , +(v.substr(-8, 3).trim())
                , +(v.substr(-3).trim())
              ]);
const isValid = (v => v.length === 3
                   && v[0] < v[1] + v[2]
                   && v[1] < v[0] + v[2]
                   && v[2] < v[0] + v[1])

console.log('--------------- PART 1 ---------------');
const solve1 = parse.filter(isValid);
console.log(`△▽ ${solve1.length} ▽△`);

console.log('--------------- PART 2 ---------------');
let solve2 = 0;
for (let i = 0; i < parse.length; i+=3) {
  for (let j = 0; j < 3; j++) {
    solve2 += isValid( [parse[i][j], parse[i+1][j], parse[i+2][j]] );
  }
}
console.log(`△▽ ${solve2} ▽△`);
