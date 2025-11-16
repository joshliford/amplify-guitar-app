import { Routes, Route, Navigate } from 'react-router'
import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import JamRoom from './pages/JamRoom'
import Shed from './pages/Shed'
import { calculateLevel, xpProgression, xpNeededToLevelUp } from './components/utils/xpUtils'
import LevelUpModal from './components/LevelUpModal'
import Auth from './pages/Auth'

function App() {

  const [ totalXP, setTotalXP ] = useState(900); // initialize totalXP to have an initial value of 2250
  const [ streak, setStreak ] = useState(5); // initialize streak to have an initial value of 5 days
  const [ completedLessons, setCompletedLessons ] = useState([]); // state to store an array of completed lessons for the user; prevents 'infinite XP farming'
  const [ completedChallenges, setCompletedChallenges ] = useState([]);
  const [ levelUpModalOpen, setLevelUpModalOpen ] = useState(false);

  const level = calculateLevel(totalXP);
  const currentXP = xpProgression(totalXP);
  const xpNeeded = xpNeededToLevelUp(totalXP);

  const handleCloseLevelUpModal = () => {
    setLevelUpModalOpen(false);
  }

  function addXP(amount) {
    setTotalXP((previousXP) => {
      const previousLevel = calculateLevel(previousXP);
      const updatedXP = previousXP + amount;
      const newLevel = calculateLevel(updatedXP);

      if (newLevel > previousLevel) {
        setLevelUpModalOpen(true);
      }

      return updatedXP;

    })
  }

  // takes in a lesson Id; prev = completedLessons at that moment
  function markLessonComplete(lessonId) {
    setCompletedLessons(prev => {
      const id = String(lessonId); // id is converted to a string to prevent potential type mismatch
        return prev.includes(id) ? prev : [...prev, id]; // if the id is already in the array, do nothing, otherwise append the id to the array
    })
  }

  function markChallengeComplete(challengeId) {
    setCompletedChallenges(prev => {
      const id = String(challengeId);
        return prev.includes(id) ? prev : [...prev, id];
    })
  }

  return (
    <div>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/auth" replace />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/dashboard' element={<Home totalXP={totalXP} streak={streak} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} completedChallenges={completedChallenges} markChallengeComplete={markChallengeComplete} />} />
          <Route path='/about' element={<About />} />
          <Route path='/jamroom' element={<JamRoom totalXP={totalXP} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} completedLessons={completedLessons} markLessonComplete={markLessonComplete} />} />
          <Route path='/shed' element={<Shed totalXP={totalXP} level={level} currentXP={currentXP} xpNeeded={xpNeeded} addXP={addXP} />} />
        </Routes>
        <LevelUpModal isModalOpen={levelUpModalOpen} handleCloseModal={handleCloseLevelUpModal} level={level} />
        <Footer />
      </main>
    </div>
  )
}

export default App
