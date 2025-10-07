import { motion } from 'framer-motion'
import { HiDownload, HiCode, HiDeviceMobile, HiGlobeAlt } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { useChatbot } from '../../contexts/ChatbotContext'
import Timeline from '../ui/Timeline'

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
    link.href = '/Raphael Lee.pdf' // You'll need to add this to the public folder
    link.download = 'Raphael-Lee-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const highlights = [
    {
      icon: <HiDeviceMobile className="text-accent-purple" size={24} />,
      title: "AI Game Development",
      description: "Building AI Game Generator with Flutter, enabling users to create games from text prompts"
    },
    {
      icon: <HiGlobeAlt className="text-accent-blue" size={24} />,
      title: "AR/VR Integration",
      description: "Implementing Augmented Reality features for property identification and real-time data"
    },
    {
      icon: <HiCode className="text-accent-green" size={24} />,
      title: "Real-time Systems",
      description: "Expert in WebSockets, AWS, and scalable APIs for live data synchronization"
    },
    {
      icon: <FaGamepad className="text-accent-pink" size={24} />,
      title: "Cross-Platform Apps",
      description: "8+ years building high-performance apps with React Native, Flutter, and modern web frameworks"
    }
  ]

  const experiences = [
    {
      type: 'work',
      title: 'Senior Mobile Engineer',
      company: 'Variant Labs',
      duration: 'Aug 2023 - Present',
      description: 'Developing AI Game Generator mobile app in Flutter, enabling users to create games from text prompts with dynamically generated levels, mechanics, and assets.',
      technologies: ['Flutter', 'AI/ML', 'Cloud Storage', 'Riverpod', 'Figma', 'iOS', 'Android'],
      achievements: [
        'Developed AI Game Generator with face upload & personalization features',
        'Implemented social networking functionality for game sharing and collaboration',
        'Applied advanced Flutter performance optimization ensuring smooth 60fps gameplay',
        'Architected scalable cloud storage and media pipelines for game uploads',
        'Integrated real-time notifications and activity feeds for group interactions'
      ]
    },
    {
      type: 'work',
      title: 'Mobile Engineer',
      company: 'TopHap',
      duration: 'Jan 2021 - Jul 2023',
      description: 'Developed TopHap Explorer mobile application from scratch, providing real-time property data and neighborhood insights using React Native with AR integration.',
      technologies: ['React Native', 'AR/VR', 'WebSockets', 'AWS', 'Redux', 'React Query', 'Google Maps API'],
      achievements: [
        'Built TopHap Explorer app with AR property identification using ARKit/ARCore',
        'Implemented GPS-based property search with real-time location data',
        'Developed real-time data synchronization using WebSockets and AWS',
        'Built Comparative Market Analysis (CMA) feature with React Query caching',
        'Integrated neighborhood analysis with walkability scores and crime rates'
      ]
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'True Prodigy Tech Solution',
      duration: 'Jun 2019 - Dec 2020',
      description: 'Quickly learned React.js, React Native, and TypeScript while delivering user-friendly interfaces and improving project performance.',
      technologies: ['React.js', 'React Native', 'TypeScript', 'Redux', 'Redux Saga', 'Jest', 'Cypress'],
      achievements: [
        'Migrated React application to TypeScript improving project performance',
        'Implemented React Hooks to accelerate frontend rebuild while maintaining compatibility',
        'Designed architecture using Redux and Redux Saga for state management',
        'Delivered responsive and pixel-perfect user interfaces',
        'Used various testing frameworks (Jest, Mocha, Cypress) for stable projects'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'Texas A&M University',
      duration: '2015 - 2019',
      description: 'Focused on computer science fundamentals, software engineering, and modern development practices.',
      technologies: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Software Engineering'],
      achievements: [
        'Graduated with Bachelor of Science in Computer Science',
        'Strong foundation in software engineering principles',
        'Prepared for modern web and mobile development career'
      ]
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
                I'm a <span className="text-accent-purple font-semibold">Senior Software Engineer</span> with
                <span className="text-accent-blue font-semibold"> 8+ years of experience</span> building
                high-performance web and cross-platform apps using React, Next.js, Flutter, and React Native.
                I specialize in creating seamless user experiences across iOS, Android, and web platforms.
              </p>

              <p className="text-lg leading-relaxed font-medium">
                My expertise spans AI-driven development, AR/VR integration, and real-time data systems using
                WebSockets, AWS, and scalable APIs. I'm passionate about designing modern, responsive interfaces,
                optimizing performance, and building products that combine AI, social features, and geospatial data
                to deliver engaging and intelligent digital experiences.
              </p>

              <p className="text-lg leading-relaxed font-medium">
                I excel at translating Figma prototypes into reusable Flutter widgets with responsive layouts,
                implementing advanced performance optimizations, and architecting scalable cloud storage solutions.
                I believe in continuous learning and enjoy tackling complex challenges that push the boundaries
                of what's possible in mobile, web, and AI development.
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

        {/* Experience Timeline Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional experience and achievements
            </p>
          </div>

          <Timeline experiences={experiences} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "8+", label: "Years Experience" },
            { number: "15+", label: "Mobile Apps Built" },
            { number: "20+", label: "Web Projects" },
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