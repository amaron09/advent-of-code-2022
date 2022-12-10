const fs = require('fs');

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  const formatted = splittedData.map(line => (
    line.split('')
  ))

  const numberOfVisibleTrees = formatted.reduce((acc, curr, index, array) => {
    const visiblePerRow = curr.reduce((rowAcc, rowCurr, rowIndex, rowArray) => {
      // Is visible edge
      if (index === 0 || rowIndex === 0 || rowIndex === rowArray.length - 1 || index === array.length - 1) {
        return rowAcc + 1
      }

      let seenFromRow = false
      // Is visible on row
     
      if (rowArray.slice(0, rowIndex).every(item => item < rowCurr)) {
        seenFromRow = true
      }

      if (!seenFromRow) {
        if (rowArray.slice(rowIndex + 1).every(item => item < rowCurr)) {
          seenFromRow = true
        }
      }
    
      if (seenFromRow) {
        return rowAcc + 1
      }

      // Is visible on column
      let seenFromColumn = false
      for (i = 0; i < index; i++) {
        if (rowCurr > array[i][rowIndex]) {
          seenFromColumn = true
        } else {
          seenFromColumn = false
          break
        }
      }

      if (!seenFromColumn) {
        for (i = index + 1; i < array.length; i++) {
          if (rowCurr > array[i][rowIndex]) {
            seenFromColumn = true
          } else {
            seenFromColumn = false
            break
          }
        }
      }

      if (seenFromColumn) {
        return rowAcc + 1
      }
      
      return rowAcc
    }, 0)

    return acc + visiblePerRow
  }, 0)
  console.log("numberOfVisibleTrees", numberOfVisibleTrees)

  // Part 2
})