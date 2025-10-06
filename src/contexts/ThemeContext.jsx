import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Function to determine theme based on time of day
const getTimeBasedTheme = () => {
    const now = new Date()
    const hour = now.getHours()

    // Night time: 6 PM (18:00) to 6 AM (06:00) - Dark theme
    // Day time: 6 AM (06:00) to 6 PM (18:00) - Light theme
    if (hour >= 18 || hour < 6) {
        return 'dark'
    } else {
        return 'light'
    }
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme
        }

        // Check if user has disabled auto theme
        const autoThemeDisabled = localStorage.getItem('autoThemeDisabled')
        if (autoThemeDisabled === 'true') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        // Use time-based theme
        return getTimeBasedTheme()
    })

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('theme', theme)

        // Apply theme to document
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        } else {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    // Auto-update theme based on time
    useEffect(() => {
        const autoThemeDisabled = localStorage.getItem('autoThemeDisabled')
        if (autoThemeDisabled === 'true') {
            return // Don't auto-update if user has disabled it
        }

        const updateThemeBasedOnTime = () => {
            const timeBasedTheme = getTimeBasedTheme()
            const savedTheme = localStorage.getItem('theme')

            // Only update if user hasn't manually set a theme
            if (!savedTheme) {
                setTheme(timeBasedTheme)
            }
        }

        // Update immediately
        updateThemeBasedOnTime()

        // Set up interval to check every minute
        const interval = setInterval(updateThemeBasedOnTime, 60000)

        // Clean up interval on unmount
        return () => clearInterval(interval)
    }, [])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
        // When user manually toggles, disable auto theme
        localStorage.setItem('autoThemeDisabled', 'true')
    }

    const enableAutoTheme = () => {
        localStorage.removeItem('autoThemeDisabled')
        localStorage.removeItem('theme')
        const timeBasedTheme = getTimeBasedTheme()
        setTheme(timeBasedTheme)
    }

    const value = {
        theme,
        toggleTheme,
        enableAutoTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        isAutoThemeEnabled: !localStorage.getItem('autoThemeDisabled')
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
