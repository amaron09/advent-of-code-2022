const fs = require('fs');

/*
A = Rock
B = Paper
C = Scissors

X = Rock
Y = Paper
Z = Scissors


*/

const roundScore = (arg1, arg2) => {
  switch (arg2) {
    case 'X': {
      let score = 1
      if (arg1 === 'A') {
        return score + 3
      }
      if (arg1 === 'C') {
        return score + 6
      }
      return score
    }
    case 'Y': {
      let score = 2
      if (arg1 === 'A') {
        return score + 6
      }
      if (arg1 === 'B') {
        return score + 3
      }
      return score
    }
    case 'Z': {
      let score = 3
      if (arg1 === 'B') {
        return score + 6
      }
      if (arg1 === 'C') {
        return score + 3
      }
      return score
    }
  }
}

const round2Score = (arg1, arg2) => {
  switch (arg2) {
    case 'X': {
      let score = 0
      if (arg1 === 'A') {
        return score + 3
      }
      if (arg1 === 'B') {
        return score + 1
      }
      if (arg1 === 'C') {
        return score + 2
      }
      return score
    }
    case 'Y': {
      let score = 3
      if (arg1 === 'A') {
        return score + 1
      }
      if (arg1 === 'B') {
        return score + 2
      }
      if (arg1 === 'C') {
        return score + 3
      }
      return score
    }
    case 'Z': {
      let score = 6
      if (arg1 === 'A') {
        return score + 2
      }
      if (arg1 === 'B') {
        return score + 3
      }
      if (arg1 === 'C') {
        return score + 1
      }
      return score
    }
  }
}

fs.readFile('data.txt', (error, data) => {
  const splittedData = data.toString().split("\n");

  const result = splittedData.reduce((acc, curr) => {
    const [player1, player2] = curr.split(' ')
    const score = roundScore(player1, player2)
    return acc + score
  }, 0)
  console.log("result", result);
  
  // Part 2
  const result2 = splittedData.reduce((acc, curr) => {
    const [player1, player2] = curr.split(' ')
    const score = round2Score(player1, player2)
    return acc + score
  }, 0)
  console.log("result2", result2);
})