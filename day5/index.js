const fs = require('fs');

/* const boxArray = 
[
  ['Z', 'N'],
  ['M', 'C', 'D'],
  ['P']
] */

const boxArray = 
[
  ['F', 'C', 'J', 'P', 'H', 'T', 'W'],
  ['G', 'R', 'V', 'F', 'Z', 'J', 'B', 'H'],
  ['H', 'P', 'T', 'R'],
  ['Z', 'S', 'N', 'P', 'H', 'T'],
  ['N', 'V', 'F', 'Z', 'H', 'J', 'C', 'D'],
  ['P', 'M', 'G', 'F', 'W', 'D', 'Z'],
  ['M', 'V', 'Z', 'W', 'S', 'J', 'D', 'P'],
  ['N', 'D', 'S'],
  ['D', 'Z', 'S', 'F', 'M'],
]

// Part 1
/* fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  splittedData.forEach(element => {
    const moveInfo = element.match(/[0-9]+/g)
    for (let i = 0; i < moveInfo[0] ; i++) {
      const removedItem = boxArray[moveInfo[1] - 1].pop()
      boxArray[moveInfo[2] - 1].push(removedItem)
    }
  });

  const topBoxes = boxArray.reduce((acc, curr) => {
    return acc + curr[curr.length - 1]
  }, '')

  console.log("topBox", topBoxes)
}) */

// Part 2
fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  splittedData.forEach(element => {
    const moveInfo = element.match(/[0-9]+/g)
    /* console.log("move info", moveInfo) */
    const removedItem = boxArray[moveInfo[1] - 1].splice(boxArray[moveInfo[1] - 1].length - moveInfo[0])
    removedItem.forEach(value => {
      boxArray[moveInfo[2] - 1].push(value)
    })
  });

  const topBoxes = boxArray.reduce((acc, curr) => {
    return acc + curr[curr.length - 1]
  }, '')

  console.log("topBox", topBoxes)
})
