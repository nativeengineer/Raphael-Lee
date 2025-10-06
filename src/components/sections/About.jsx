import { motion } from 'framer-motion'
import { HiDownload, HiCode, HiDeviceMobile, HiGlobeAlt } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { useChatbot } from '../../contexts/ChatbotContext'

const About = () => {
  const { handleClick } = useChatbot()

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

  const handleResumeDownload = () => {
    // Create a placeholder resume - in production, you'd have an actual PDF
    const link = document.createElement('a')
    link.href = '/andrew mccloskey resume.pdf' // You'll need to add this to the public folder
    link.download = 'Andrew-McCloskey-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const highlights = [
    {
      icon: <HiDeviceMobile className="text-accent-purple" size={24} />,
      title: "Cross-Platform Mobile",
      description: "6+ years building native-feeling apps with React Native and Flutter"
    },
    {
      icon: <HiGlobeAlt className="text-accent-blue" size={24} />,
      title: "Modern Web Development",
      description: "Creating responsive, performant web apps with Next.js, React, and TypeScript"
    },
    {
      icon: <HiCode className="text-accent-green" size={24} />,
      title: "AI Integration",
      description: "Expert in LLM integration, prompt engineering, and AI automation for intelligent apps"
    },
    {
      icon: <FaGamepad className="text-accent-pink" size={24} />,
      title: "Full Stack Solutions",
      description: "End-to-end development from mobile apps to web platforms and APIs"
    }
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left side - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed font-medium">
                I'm a <span className="text-accent-purple font-semibold">Senior Mobile & Web Developer</span> with
                <span className="text-accent-blue font-semibold"> 6+ years of experience</span> building
                scalable cross-platform applications with AI integration. I specialize in React Native, Flutter, Next.js,
                AI/ML technologies, and modern web frameworks, delivering intelligent mobile apps and responsive web applications.
              </p>

              <p className="text-lg leading-relaxed font-medium">
                My expertise spans the full mobile and web development stack, from native iOS/Android
                development to modern web frameworks and AI integration. I excel at building cross-platform solutions using
                React Native and Flutter, while also creating performant web applications with Next.js,
                React, and TypeScript. I specialize in integrating AI/ML capabilities, LLM APIs, and automation
                to create intelligent applications with exceptional user experiences.
              </p>

              <p className="text-lg leading-relaxed font-medium">
                I'm passionate about staying current with the latest mobile, web, and AI technologies,
                contributing to open-source projects, and mentoring junior developers. I believe in
                continuous learning and enjoy tackling complex challenges that push the boundaries of
                what's possible in mobile, web, and AI development.
              </p>
            </div>

            {/* Resume Download */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="btn-primary flex items-center gap-3 w-fit"
            >
              <HiDownload size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            {highlights.map((highlight, index) => {
              const highlightType = highlight.title === 'Cross-Platform Mobile' ? 'mobile-development' :
                highlight.title === 'Modern Web Development' ? 'web-development' :
                  highlight.title === 'AI Integration' ? 'ai-ml' :
                    highlight.title === 'Full Stack Solutions' ? 'backend-apis' : 'web-development'

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="card flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-dark-card/50 transition-colors cursor-pointer"
                  onClick={() => handleClick(highlightType)}
                >
                  <div className="flex-shrink-0 p-3 bg-gray-100 dark:bg-dark-card rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "6+", label: "Years Experience" },
            { number: "40+", label: "Mobile Apps Built" },
            { number: "25+", label: "Web Projects" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About