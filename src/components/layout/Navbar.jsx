import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon, HiClock } from 'react-icons/hi'
import { useTheme } from '../../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme, enableAutoTheme, isAutoThemeEnabled } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            RL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'text-accent-purple' : ''}`}
              >
                {label}
              </Link>
            ))}

            {/* Theme Toggle Buttons */}
            <div className="flex items-center gap-2">
              {/* Auto Theme Toggle */}
              <button
                onClick={enableAutoTheme}
                className={`p-2 rounded-lg transition-colors shadow-sm hover:shadow-md ${isAutoThemeEnabled
                  ? 'bg-accent-purple text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                aria-label="Enable auto theme based on time"
                title="Auto theme based on time of day"
              >
                <HiClock size={20} />
              </button>

              {/* Manual Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm hover:shadow-md"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title="Manual theme toggle"
              >
                {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center space-x-2">
            {/* Auto Theme Toggle */}
            <button
              onClick={enableAutoTheme}
              className={`p-2 rounded-lg transition-colors shadow-sm hover:shadow-md ${isAutoThemeEnabled
                ? 'bg-accent-purple text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              aria-label="Enable auto theme based on time"
              title="Auto theme based on time of day"
            >
              <HiClock size={20} />
            </button>

            {/* Manual Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm hover:shadow-md"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title="Manual theme toggle"
            >
              {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 bg-white dark:bg-dark-bg">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block py-2 px-4 rounded-lg transition-colors ${location.pathname === path
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar