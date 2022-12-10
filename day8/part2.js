const fs = require('fs');

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  const formatted = splittedData.map(line => (
    line.split('')
  ))

  const totalViewScore = formatted.reduce((acc, curr, index, array) => {
    const scorePerRow = curr.reduce((rowAcc, rowCurr, rowIndex, rowArray) => {

      let viewLeft = 0
      let viewRight = 0
      
      let viewUp = 0
      let viewDown = 0

      // Is up
      if (index !== 0) {
        for (i = index - 1; i >= 0; i--) {
          viewUp++
          if (rowCurr <= array[i][rowIndex]) {
            break
          }
        }
      }

      // Is left
      for (i = rowIndex - 1; i >= 0; i--) {
        viewLeft++
        if (rowCurr <= rowArray[i]) {
          break
        }
      }

      // Is visible down
      if (index !== array.length - 1) {
        for (i = index + 1; i < array.length; i++) {
          viewDown++
          if (rowCurr <= array[i][rowIndex]) {
            break
          }
        }
      }

      // Right
      for (i = rowIndex + 1; i < rowArray.length; i++) {
        viewRight++
        if (rowCurr <= rowArray[i]) {
          break
        }
      }

      // Only multiply if value is not 0
      const viewScoreArray = [viewUp, viewLeft, viewDown, viewRight].filter(item => item !== 0)

      const vievScore = viewScoreArray.reduce((acc, curr) => {
        return acc * curr
      }, 1)
      
      return [...rowAcc, vievScore]
    }, [])

    return [...acc, ...scorePerRow]
  }, [])
  console.log("totalViewScore", Math.max(...totalViewScore))

})