import { motion } from 'framer-motion'

const AnimatedIllustration = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Main avatar image with animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-green/20 blur-xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
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

      {/* Floating particles around the avatar */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180)
        const radius = 160
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-purple rounded-full"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedIllustration