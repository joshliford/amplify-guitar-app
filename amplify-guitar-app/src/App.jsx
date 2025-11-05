import { Routes, Route } from 'react-router'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import JamRoom from './pages/JamRoom'
import Shed from './pages/Shed'

function App() {

  return (
    <div>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/jamroom' element={<JamRoom />} />
          <Route path='/shed' element={<Shed />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
