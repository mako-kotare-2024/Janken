import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../components/App'
import Header from '../components/Header'
import Game from '../components/Game'
import Footer from '../components/Footer'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Header />} />
    <Route path="/" element={<Game />} />
    <Route path="/" element={<Footer />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
