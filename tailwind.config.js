/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors - Enhanced for better visibility
        light: {
          bg: '#fafbfc',
          surface: '#ffffff',
          card: '#ffffff',
          subtle: '#f1f5f9',
          accent: '#f8fafc',
        },
        // Dark theme colors - Modern & Fashionable
        dark: {
          bg: '#0f0f23',        // Deep navy blue
          surface: '#1a1a2e',   // Rich dark blue
          card: '#16213e',      // Sophisticated blue-gray
        },
        // Accent colors - Modern & Fashionable
        accent: {
          purple: '#a855f7',  // Vibrant purple
          blue: '#06b6d4',    // Cyan blue  
          green: '#22c55e',   // Emerald green
          pink: '#f472b6',    // Hot pink
          orange: '#f59e0b',  // Amber orange
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }
    },
  },
  plugins: [],
}