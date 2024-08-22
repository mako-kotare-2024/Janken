console.log('Welcome to Janken')

// Variables
let result = false

// Shows when won
export function playerHasWon(playerChoice, computerChoice) {
  switch (true) {
    //if player choice comes back as a 'rock' string, then result = true/win
    case playerChoice === 'rock' && computerChoice === 'scissors':
      result = true
      break
    case playerChoice === 'paper' && computerChoice === 'rock':
      result = true
      break
    case playerChoice === 'scissors' && computerChoice === 'paper':
      result = true
      break
  }
  if (result === true) {
    console.log('win')
  } else {
    console.log('lose')
  }
}
