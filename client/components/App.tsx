import { useFruits } from '../hooks/useFruits.ts'
import Footer from './Footer.tsx'
import Game from './Game.tsx'
import Header from './Header.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Janken lives!!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
        <div className="header">
          <Header />
        </div>
        <div className="game">
          <Game />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
