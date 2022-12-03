const fs = require('fs');

const priorityValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
}


const splitAtIndex = (string, index) => {
  return [string.slice(0, index), string.slice(index)]
}

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  const sum = splittedData.reduce((acc, curr) => {
    const [first, second] = splitAtIndex(curr, curr.length / 2);
    const firstCharacters = first.split('');
    const secondCharacters = second.split('');

    let breakLoop = false
    const sharedCharacters = firstCharacters.reduce((acc, curr) => {
      if (secondCharacters.includes(curr) && !breakLoop) {
        breakLoop = true
        return priorityValue[curr]
      }
      return acc
    }, 0)
    return acc + sharedCharacters;
  }, 0)
  console.log("sum", sum)

  // Part 2

  const sum2 = splittedData.reduce((acc, curr, index) => {
    const [first, second] = splitAtIndex(curr, curr.length / 2);
    const firstCharacters = first.split('');
    const secondCharacters = second.split('');

    let breakLoop = false
    const sharedCharacters = firstCharacters.reduce((acc, curr) => {
      if (secondCharacters.includes(curr) && !breakLoop) {
        breakLoop = true
        return priorityValue[curr]
      }
      return acc
    }, 0)
    return acc + sharedCharacters;
  }, 0)

})