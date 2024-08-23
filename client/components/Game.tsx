// import Computer from ''
// import Player from ''
// import PlayerChoose from ''
// import paper from ''
// import rock from ''
// import scissors from ''

function Game() {
  return (
    <div className="Game">
      <h2></h2>
      {/* STATE THINGS GO UNDER THE GAME */}

      <div className="playergroup">
        <div className="buttonGroup">
          <button className="rock choice">
            <img src="/images/choose-rock.png" alt="Choose Rock" />
          </button>
          <button className="scissors choice">
            <img src="/images/choose-scissors.png" alt="Choose Scissors" />
          </button>
          <button className="paper choice">
            <img src="/images/choose-paper.png" alt="Choose Paper" />
          </button>
        </div>

        <div className="playersContainer">
          {/* PLAYER THINGS */}
          <div className="player">
            <img src="/images/alex.png" alt="The player prepping" />
            {/* Player Image here */}
          </div>
        </div>

        <div className="computerGroup">
          {/* COMPUTER THINGS */}
          <div className="computer">
            <img src="/images/gooseka-paper.png" alt="The player prepping" />
            {/* Enemy Image here */}
          </div>
        </div>
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
