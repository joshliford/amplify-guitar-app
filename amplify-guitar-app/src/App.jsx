import { Routes, Route, Navigate, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import JamRoom from "./pages/JamRoom";
import Shed from "./pages/Shed";
import { calculateLevel, xpProgression, xpNeededToLevelUp } from "./components/utils/xpUtils";
import LevelUpModal from "./components/LevelUpModal";
import Auth from "./pages/Auth";
import SideNavBar from "./components/SideNavBar";

function App() {
  
  const [totalXP, setTotalXP] = useState(900);
  const [streak, setStreak] = useState(5);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [levelUpModalOpen, setLevelUpModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    // adds or removes 'dark' class from <html>
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // runs everytime isDark changes
  }, [isDark]);

  const navigate = useNavigate();

  const level = calculateLevel(totalXP);
  const currentXP = xpProgression(totalXP);
  const xpNeeded = xpNeededToLevelUp(totalXP);

  const handleCloseLevelUpModal = () => {
    setLevelUpModalOpen(false);
  };

  const handleLogout = () => {
    navigate("/auth");
    setIsDark(false);
  };

  function addXP(amount) {
    setTotalXP((previousXP) => {
      const previousLevel = calculateLevel(previousXP);
      const updatedXP = previousXP + amount;
      const newLevel = calculateLevel(updatedXP);

      if (newLevel > previousLevel) {
        setLevelUpModalOpen(true);
      }

      return updatedXP;
    });
  }

  // takes in a lesson Id; prev = completedLessons at that moment
  function markLessonComplete(lessonId) {
    setCompletedLessons((prev) => {
      return prev.includes(lessonId) ? prev : [...prev, lessonId];
    });
  }

  function markChallengeComplete(challengeId) {
    setCompletedChallenges((prev) => {
      return prev.includes(challengeId) ? prev : [...prev, challengeId];
    });
  }

  return (
    <div className="grid-cols-1">
      <Header />
      <main className="flex grow">
        <SideNavBar handleLogout={handleLogout} toggleDarkMode={toggleDarkMode}/>
        <div className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <Home
                totalXP={totalXP}
                streak={streak}
                level={level}
                currentXP={currentXP}
                xpNeeded={xpNeeded}
                addXP={addXP}
                completedChallenges={completedChallenges}
                markChallengeComplete={markChallengeComplete}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/jamroom"
            element={
              <JamRoom
                totalXP={totalXP}
                level={level}
                currentXP={currentXP}
                xpNeeded={xpNeeded}
                addXP={addXP}
                completedLessons={completedLessons}
                markLessonComplete={markLessonComplete}
              />
            }
          />
          <Route
            path="/shed"
            element={
              <Shed
                totalXP={totalXP}
                level={level}
                currentXP={currentXP}
                xpNeeded={xpNeeded}
                addXP={addXP}
              />
            }
          />
        </Routes>
        <LevelUpModal
          isModalOpen={levelUpModalOpen}
          handleCloseModal={handleCloseLevelUpModal}
          level={level}
        />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
