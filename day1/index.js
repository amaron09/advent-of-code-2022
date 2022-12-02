const fs = require('fs');

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n\n");
  const calculateMax = splittedData.reduce((acc, curr) => {
    const calculatedValue = curr.split("\n").reduce((acc, curr) => {
      return acc + parseInt(curr, 10)
    }, 0)
    return [...acc, calculatedValue]
  }, [])

  const maxValue = Math.max(...calculateMax)
  console.log("maxValue", maxValue)
  
  // Part 2
  const sortedArray = calculateMax.sort((a, b) => b - a)

  const threeLargestValues = sortedArray[0] + sortedArray[1] + sortedArray[2]
  console.log("threeLargestValues", threeLargestValues)
})