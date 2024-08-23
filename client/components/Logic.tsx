console.log('Welcome to Janken')


// Variables
let result = false
let playerChoice = 'rock'


// Options
const options = ['rock', 'paper', 'scissors']


// Button Select
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}


let computerChoice = 'rock'
function updateComputerChoice() {
  computerChoice = options[getRandomInt(3)]
}


export function updatePlayerChoice(str: string) {
  playerChoice = str
  hasPlayerWon()
}


// Game Start
// TODO make funtion that starts game on button click
function hasPlayerWon() {
  updateComputerChoice()
  playerHasWon(playerChoice, computerChoice)
  if (result !== false) {
    return console.log('win')
  } else {
    return console.log('lose')
  }
}


// Shows when won
function playerHasWon(playerChoice: string, computerChoice: string) {
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
  return result
}
