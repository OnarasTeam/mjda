import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'
import OptionsPage from './pages/Options'
import GamesPage from './pages/Games'
import AwardsPage from './pages/Awards'

function App() {
  return (
    <div id='main-container'>
      <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='options' element={<OptionsPage />} />
        <Route path='games' element={<GamesPage />} />
        <Route path='awards' element={<AwardsPage />} />
      </Routes>
    </div>
  )
}

export default App
