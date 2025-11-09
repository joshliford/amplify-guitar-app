import { Routes, Route } from 'react-router'
import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import JamRoom from './pages/JamRoom'
import Shed from './pages/Shed'
import { calculateLevel, xpProgression, xpNeededToLevelUp } from './components/utils/xpUtils'

function App() {

  const [ totalXP, setTotalXP ] = useState(2250);
  const [ streak, setStreak ] = useState(5);

  const level = calculateLevel(totalXP);
  const currentXP = xpProgression(totalXP);
  const xpNeeded = xpNeededToLevelUp(totalXP);

  function addXP(amount) {
    setTotalXP((previousXP) => previousXP + amount);
  }

  return (
    <div>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home totalXP={totalXP} streak={streak} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} />} />
          <Route path='/about' element={<About />} />
          <Route path='/jamroom' element={<JamRoom totalXP={totalXP} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} />} />
          <Route path='/shed' element={<Shed totalXP={totalXP} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
