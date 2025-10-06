import { motion } from 'framer-motion'

const AnimatedIllustration = () => {
  return (
    <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Main avatar image with animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Multiple layered glow effects */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/30 via-accent-blue/30 to-accent-green/30 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-pink/20 via-accent-orange/20 to-accent-purple/20 blur-xl"
          animate={{
            scale: [1.1, 1.3, 1.1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Rotating ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent-purple/30"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full border border-accent-blue/40"
          style={{
            width: '500px',
            height: '500px',
            margin: '-50px'
          }}
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Avatar image */}
        <motion.img
          src="/andrew-avatar.jpg"
          alt="Andrew M. - Developer Avatar"
          className="relative z-10 w-full h-full object-cover rounded-full aspect-square"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%'
          }}
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onError={(e) => {
            // Fallback if image doesn't load
            console.log('Avatar image not found, showing fallback')
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />

        {/* Fallback SVG if image doesn't load */}
        <div className="hidden relative z-10 w-full h-full">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified fallback design */}
            <defs>
              <linearGradient id="fallbackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <circle
              cx="200"
              cy="200"
              r="180"
              fill="url(#fallbackGradient)"
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="2"
            />

            <circle
              cx="200"
              cy="170"
              r="40"
              fill="#f7fafc"
              stroke="#e2e8f0"
              strokeWidth="2"
            />

            <rect
              x="175"
              y="210"
              width="50"
              height="60"
              rx="25"
              fill="#8b5cf6"
            />
          </svg>
        </div>
      </motion.div>

      {/* Enhanced floating particles with different sizes and colors */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180)
        const radius = 220 + (i % 3) * 30
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        const colors = ['accent-purple', 'accent-blue', 'accent-green', 'accent-pink', 'accent-orange']
        const color = colors[i % colors.length]
        const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3']
        const size = sizes[i % sizes.length]

        return (
          <motion.div
            key={i}
            className={`absolute ${size} bg-${color} rounded-full shadow-lg`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        )
      })}

      {/* Orbiting tech icons */}
      {['React', 'Flutter', 'Next.js', 'AI/ML'].map((tech, i) => {
        const angle = (i * 90) * (Math.PI / 180)
        const radius = 280
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={tech}
            className="absolute bg-white dark:bg-dark-surface rounded-lg px-3 py-1 shadow-lg border border-gray-200 dark:border-gray-700"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              rotate: -90
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech}</span>
          </motion.div>
        )
      })}

      {/* Pulsing dots around the perimeter */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180)
        const radius = 250
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-accent-purple rounded-full"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedIllustration