const fs = require('fs');

const range = (start, end) => {
  const startInt = parseInt(start, 10)
  const endInt = parseInt(end, 10)
  return Array.from({ length: endInt - startInt + 1 }, (_, i) => i + startInt)
}

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  const sum = splittedData.reduce((acc, curr) => {
    const pair = curr.split(',')
    const firstPair = pair[0].split('-')
    const secondPair = pair[1].split('-')

    const firstRange = range(firstPair[0], firstPair[1])
    const secondRange = range(secondPair[0], secondPair[1])

    const duplicateAssignments = firstRange.every(item => secondRange.includes(item)) || secondRange.every(item => firstRange.includes(item))

    if (duplicateAssignments) {
      return acc + 1
    }
    return acc
  }, 0)

  console.log("sum", sum)

  // Part 2

  const sum2 = splittedData.reduce((acc, curr) => {
    const pair = curr.split(',')
    const firstPair = pair[0].split('-')
    const secondPair = pair[1].split('-')

    const firstRange = range(firstPair[0], firstPair[1])
    const secondRange = range(secondPair[0], secondPair[1])

    const duplicateAssignments = firstRange.some(item => secondRange.includes(item)) || secondRange.some(item => firstRange.includes(item))

    if (duplicateAssignments) {
      return acc + 1
    }
    return acc
  }, 0)

  console.log("sum2", sum2)
})