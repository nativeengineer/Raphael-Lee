import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AnimatedIllustration from '../ui/AnimatedIllustration'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-accent-purple font-medium text-lg">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block">Andrew M.</span>
              <span className="block gradient-text text-3xl md:text-4xl lg:text-5xl mt-2">
                Senior Mobile Engineer
              </span>
              <span className="block gradient-text text-3xl md:text-4xl lg:text-5xl">
                & Game Developer
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Crafting innovative mobile experiences with React Native, Flutter, WebGL, and AI/ML. 
              Building the future of interactive entertainment and user-centric applications.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                View My Work
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                Get In Touch
              </Link>
            </motion.div>

            {/* Tech highlights */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['React Native', 'Flutter', 'WebGL', 'AI/ML', 'Game Dev'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-dark-surface border border-gray-700 rounded-full text-sm text-gray-300 hover:border-accent-purple/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right side - Animated illustration */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <AnimatedIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-400 hover:text-accent-purple cursor-pointer transition-colors"
          >
            <HiArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Home