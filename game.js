console.log('Welcome to Janken')

// Variables
let result = false

// Options
const options = ['rock', 'paper', 'scissors']

// Enemy Select
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
let computerChoice = 'rock'
function updateComputerChoice() {
  computerChoice = options[getRandomInt(3)]
}

// Player Select
let playerSelect = 'rock'
function updatePlayerSelect(num) {
  playerSelect = options[num]
}

// Game Start
// TODO make funtion that starts game on button click
function buttonClicked(e) {
  const num = e.target.id
  updatePlayerSelect(num)
  updateComputerChoice()
  if (playerHasWon() !== false) {
    return console.log('win')
  } else {
    return console.log('lose')
  }
}

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
  return false
}
