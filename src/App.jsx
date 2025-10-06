import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import { ChatbotProvider } from './contexts/ChatbotContext'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ParticleBackground from './components/ui/ParticleBackground'
import MobileUIBackground from './components/ui/MobileUIBackground'
import AIChatbot from './components/ui/AIChatbot'

function App() {
  return (
    <ThemeProvider>
      <ChatbotProvider>
        <Router>
          <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-800 dark:text-white relative overflow-x-hidden floating-shapes">
            {/* Animated background */}
            <ParticleBackground />

            {/* Mobile UI Background */}
            <MobileUIBackground />

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

            {/* AI Chatbot */}
            <AIChatbot />
          </div>
        </Router>
      </ChatbotProvider>
    </ThemeProvider>
  )
}

export default App