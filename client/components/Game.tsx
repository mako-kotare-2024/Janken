// import Computer from ''
// import Player from ''
// import PlayerChoose from ''
// import paper from ''
// import rock from ''
// import scissors from ''

function Game() {
  return (
    <div className="Game">
      <h2>Game</h2>
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
        <img src="/images/alex.png" alt="The player prepping"/>
        {/* Player Image here */}
      </div>
      
      {/* COMPUTER THINGS */}
      <div className="computer">
        <p>computer</p>
        {/* Enemy Image here */}
      </div>
      
      {/* just bricks, no biggie */}
      <div className="bricks">
        <p>bricks</p>
        {/* Bricks for the people can't fly */}
      </div>
    </div>
  )
}

export default Game
