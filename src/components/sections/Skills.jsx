import { motion } from 'framer-motion'
import { 
  SiReact, SiFlutter, SiUnity, SiTypescript, SiJavascript, SiPython,
  SiNodedotjs, SiMongodb, SiFirebase, SiTensorflow, SiAmazonaws,
  SiGit, SiDocker, SiFigma
} from 'react-icons/si'
import { 
  HiDeviceMobile, HiGlobeAlt, HiCode, HiChip
} from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  }

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <HiDeviceMobile className="text-accent-purple" size={32} />,
      color: "accent-purple",
      skills: [
        { name: "React Native", icon: <SiReact size={24} />, level: 95 },
        { name: "Flutter", icon: <SiFlutter size={24} />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript size={24} />, level: 92 },
        { name: "JavaScript", icon: <SiJavascript size={24} />, level: 95 }
      ]
    },
    {
      title: "Game Development",
      icon: <FaGamepad className="text-accent-blue" size={32} />,
      color: "accent-blue",
      skills: [
        { name: "Unity", icon: <SiUnity size={24} />, level: 85 },
        { name: "WebGL", icon: <HiCode size={24} />, level: 80 },
        { name: "Three.js", icon: <HiGlobeAlt size={24} />, level: 75 },
        { name: "C#", icon: <SiUnity size={24} />, level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <HiChip className="text-accent-green" size={32} />,
      color: "accent-green",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={24} />, level: 80 },
        { name: "Python", icon: <SiPython size={24} />, level: 88 },
        { name: "Machine Learning", icon: <HiChip size={24} />, level: 75 },
        { name: "Computer Vision", icon: <HiChip size={24} />, level: 70 }
      ]
    },
    {
      title: "Backend & Cloud",
      icon: <HiGlobeAlt className="text-accent-pink" size={32} />,
      color: "accent-pink",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={24} />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb size={24} />, level: 85 },
        { name: "Firebase", icon: <SiFirebase size={24} />, level: 88 },
        { name: "AWS", icon: <SiAmazonaws size={24} />, level: 80 }
      ]
    }
  ]

  const tools = [
    { name: "Git", icon: <SiGit size={32} /> },
    { name: "Docker", icon: <SiDocker size={32} /> },
    { name: "Figma", icon: <SiFigma size={32} /> },
    { name: "VS Code", icon: <HiCode size={32} /> }
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative z-10 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover="hover"
              className="card group hover:border-accent-purple/50"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400">
                          {skill.icon}
                        </span>
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.3 + skillIndex * 0.1 
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r from-${category.color} to-${category.color}/70`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                className="p-4 bg-dark-surface border border-gray-700 rounded-xl hover:border-accent-purple/50 transition-colors cursor-pointer group"
              >
                <div className="text-gray-400 group-hover:text-accent-purple transition-colors mb-2">
                  {tool.icon}
                </div>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center p-8 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-green/10 rounded-2xl border border-gray-700"
        >
          <p className="text-lg text-gray-300 mb-4">
            "I believe in continuous learning and staying up-to-date with the latest technologies. 
            My diverse skill set allows me to tackle complex problems from multiple angles and 
            deliver comprehensive solutions."
          </p>
          <div className="text-accent-purple font-semibold">
            - Andrew M.
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills