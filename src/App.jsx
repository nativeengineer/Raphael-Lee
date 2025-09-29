import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ParticleBackground from './components/ui/ParticleBackground'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
        {/* Animated background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content with page transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App