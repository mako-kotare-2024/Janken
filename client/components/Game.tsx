import { useState, useEffect } from 'react'

type Choice = {
  id: number
  name: string
  player_img: string
  computer_img: string
}

function Game() {
  const [choices, setChoices] = useState<Choice[]>([])

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

  return (
    <div className="Game">
      <h2>Rock Paper Scissors</h2>
      {/* STATE THINGS GO UNDER THE GAME */}

      <div className="buttonGroup">
        <button className="rock">
          <img src="/images/choose-rock.png" alt="Choose Rock" />
        </button>
        <button className="scissors">
          <img src="/images/choose-scissors.png" alt="Choose Scissors" />
        </button>
        <button className="paper">
          <img src="/images/choose-paper.png" alt="Choose Paper" />
        </button>
      </div>

      {/* PLAYER THINGS */}
      <div className="player">
        {choices.length > 0 && (
          <img
            src={choices.find((choice) => choice.name === 'idle')?.player_img}
            alt="The player prepping"
          />
        )}
      </div>

      {/* COMPUTER THINGS */}
      <div className="computer">
        {choices.length > 0 && (
          <img
            src={choices.find((choice) => choice.name === 'idle')?.computer_img}
            alt="The computer prepping"
          />
        )}
      </div>

      {/* just bricks, no biggie */}
      <div className="bricks">
        <img src="/images/floor.png" alt="floor" />
        {/* Bricks for the people can't fly */}
      </div>
    </div>
  )
}

export default Game
