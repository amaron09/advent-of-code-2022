const fs = require('fs');

fs.readFile('data.txt', (error, data) => {
  const dataStream = data.toString().split('')
  let markerCandidate = []
  let foundMarker = false
  let markerIndex

  //const distinctCharacters = 4 // part 1
  const distinctCharacters = 14 // part 2

  dataStream.forEach((character, index) => {
    if (foundMarker) {
      return null
    }

    if (index > distinctCharacters - 1 ) {
      markerCandidate.shift()
      markerCandidate.push(character)

      if ([...new Set(markerCandidate)].length === distinctCharacters) {
        markerIndex = index + 1
        foundMarker = true
      }
      return null
    }

    if ([...new Set(markerCandidate)].length === distinctCharacters) {
      markerIndex = index + 1
      foundMarker = true
      return null
    }
    markerCandidate.push(character) 
  })
  console.log("markerCandidate", markerCandidate)
  console.log("marker index", markerIndex)
})