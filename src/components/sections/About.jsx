import { motion } from 'framer-motion'
import { HiDownload, HiCode, HiDeviceMobile, HiGlobeAlt } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'

const About = () => {
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
      title: "Mobile First",
      description: "5+ years crafting exceptional mobile experiences with React Native and Flutter"
    },
    {
      icon: <FaGamepad className="text-accent-blue" size={24} />,
      title: "Game Development",
      description: "Creating immersive games and interactive experiences with WebGL and Unity"
    },
    {
      icon: <HiCode className="text-accent-green" size={24} />,
      title: "AI Integration",
      description: "Implementing cutting-edge AI/ML solutions for intelligent user experiences"
    },
    {
      icon: <HiGlobeAlt className="text-accent-pink" size={24} />,
      title: "Full Stack",
      description: "End-to-end development from backend APIs to pixel-perfect frontends"
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a <span className="text-accent-purple font-semibold">Senior Mobile Engineer</span> and 
                <span className="text-accent-blue font-semibold"> Game Developer</span> with a passion for 
                building innovative digital experiences. With over 5 years of experience in the industry, 
                I specialize in creating high-performance mobile applications and immersive games.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey began with a fascination for how technology can solve real-world problems. 
                Today, I work with cutting-edge technologies like React Native, Flutter, WebGL, and AI/ML 
                to bring ideas to life. I believe in writing clean, maintainable code and creating 
                user experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or experimenting with the latest in AI and machine learning. I'm always excited 
                to take on new challenges and collaborate with teams who share my passion for innovation.
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
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="card flex items-start gap-4 hover:bg-dark-card/50 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0 p-3 bg-dark-card rounded-lg">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
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