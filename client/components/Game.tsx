import { useState, useEffect } from 'react'

type Choice = {
  id: number
  name: string
  player_img: string
  computer_img: string
}

function Game() {
  const [choices, setChoices] = useState<Choice[]>([])

  const [playerChoice, setPlayerChoice] = useState<string>('idle')

  console.log(playerChoice)
  useEffect(() => {
    // Get choices from database via API
    const fetchChoices = async () => {
      try {
        const response = await fetch('/api/v1/choices')
        const data = await response.json()
        setChoices(data)
      } catch (error) {
        console.error('Error fetching choices:', error)
      }
    }

    fetchChoices()
  }, [])

  const handleRock = () => {
    setPlayerChoice('rock')
  }
  const handlePaper = () => {
    setPlayerChoice('paper')
  }
  const handleScissors = () => {
    setPlayerChoice('scissors')
  }

  return (
    <div className="Game">
      {/* STATE THINGS GO UNDER THE GAME */}

      <div className="playergroup">
        <div className="buttonGroup">
          <button className="rock choice" onClick={handleRock}>
            <img src="/images/choose-rock.png" alt="Choose Rock" />
          </button>
          <button className="scissors choice" onClick={handleScissors}>
            <img src="/images/choose-scissors.png" alt="Choose Scissors" />
          </button>
          <button className="paper choice" onClick={handlePaper}>
            <img src="/images/choose-paper.png" alt="Choose Paper" />
          </button>
        </div>

        {/* PLAYER THINGS */}
        <div className="player">
          {choices.length > 0 && (
            <img
              src={
                choices.find((choice) => choice.name === `${playerChoice}`)
                  ?.player_img
              }
              alt="The player prepping"
            />
          )}
        </div>
      </div>

      {/* <div className="computerGroup"> */}
      {/* COMPUTER THINGS */}
      <div className="computer">
        <img src="/images/gooseka-paper.png" alt="The player prepping" />
        {/* Enemy Image here */}
      </div>
    </div>
    // </div>
  )
}

export default Game
