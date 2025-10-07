import { motion } from 'framer-motion'
import {
  SiReact, SiFlutter, SiUnity, SiTypescript, SiJavascript, SiPython,
  SiNodedotjs, SiMongodb, SiFirebase, SiTensorflow, SiAmazonaws,
  SiGit, SiDocker, SiFigma, SiNextdotjs
} from 'react-icons/si'
import {
  HiDeviceMobile, HiGlobeAlt, HiCode, HiChip
} from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { useChatbot } from '../../contexts/ChatbotContext'

const Skills = () => {
  const { handleClick } = useChatbot()

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
      title: "Web Development",
      icon: <HiCode className="text-accent-orange" size={32} />,
      color: "accent-orange",
      skills: [
        { name: "React", icon: <SiReact size={24} />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs size={24} />, level: 92 },
        { name: "TypeScript", icon: <SiTypescript size={24} />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript size={24} />, level: 95 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <HiDeviceMobile className="text-accent-purple" size={32} />,
      color: "accent-purple",
      skills: [
        { name: "React Native", icon: <SiReact size={24} />, level: 95 },
        { name: "Flutter", icon: <SiFlutter size={24} />, level: 90 },
        { name: "iOS Development", icon: <HiDeviceMobile size={24} />, level: 85 },
        { name: "Android Development", icon: <HiDeviceMobile size={24} />, level: 85 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <HiGlobeAlt className="text-accent-blue" size={32} />,
      color: "accent-blue",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={24} />, level: 90 },
        { name: "REST APIs", icon: <HiCode size={24} />, level: 92 },
        { name: "GraphQL", icon: <HiCode size={24} />, level: 85 },
        { name: "Database Design", icon: <HiGlobeAlt size={24} />, level: 88 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <HiChip className="text-accent-green" size={32} />,
      color: "accent-green",
      skills: [
        { name: "LLM Integration", icon: <HiChip size={24} />, level: 90 },
        { name: "Prompt Engineering", icon: <HiCode size={24} />, level: 92 },
        { name: "AI Automation", icon: <HiChip size={24} />, level: 88 },
        { name: "Machine Learning", icon: <SiTensorflow size={24} />, level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <HiCode className="text-accent-pink" size={32} />,
      color: "accent-pink",
      skills: [
        { name: "Git & GitHub", icon: <SiGit size={24} />, level: 95 },
        { name: "Docker", icon: <SiDocker size={24} />, level: 85 },
        { name: "CI/CD", icon: <HiCode size={24} />, level: 88 },
        { name: "AWS", icon: <SiAmazonaws size={24} />, level: 80 }
      ]
    }
  ]

  const tools = [
    { name: "VS Code", icon: <HiCode size={32} /> },
    { name: "Figma", icon: <SiFigma size={32} /> },
    { name: "OpenAI API", icon: <HiChip size={32} /> },
    { name: "Postman", icon: <HiCode size={32} /> },
    { name: "Xcode", icon: <HiDeviceMobile size={32} /> },
    { name: "Docker", icon: <SiDocker size={32} /> }
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
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const categoryType = category.title === 'Web Development' ? 'web-development' :
              category.title === 'Mobile Development' ? 'mobile-development' :
                category.title === 'AI & Machine Learning' ? 'ai-ml' :
                  category.title === 'Backend & APIs' ? 'backend-apis' :
                    category.title === 'Tools & DevOps' ? 'tools-devops' : 'web-development'

            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover="hover"
                className={`card group cursor-pointer border-l-4 ${category.color === 'accent-purple' ? 'border-l-accent-purple hover:border-l-accent-purple/80 hover:bg-accent-purple/5' :
                  category.color === 'accent-orange' ? 'border-l-accent-orange hover:border-l-accent-orange/80 hover:bg-accent-orange/5' :
                    category.color === 'accent-blue' ? 'border-l-accent-blue hover:border-l-accent-blue/80 hover:bg-accent-blue/5' :
                      category.color === 'accent-green' ? 'border-l-accent-green hover:border-l-accent-green/80 hover:bg-accent-green/5' :
                        category.color === 'accent-pink' ? 'border-l-accent-pink hover:border-l-accent-pink/80 hover:bg-accent-pink/5' :
                          'border-l-accent-purple hover:border-l-accent-purple/80 hover:bg-accent-purple/5'
                  } transition-all duration-300`}
                onClick={() => handleClick(categoryType)}
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`${category.color === 'accent-purple' ? 'text-accent-purple' :
                            category.color === 'accent-orange' ? 'text-accent-orange' :
                              category.color === 'accent-blue' ? 'text-accent-blue' :
                                category.color === 'accent-green' ? 'text-accent-green' :
                                  category.color === 'accent-pink' ? 'text-accent-pink' :
                                    'text-accent-purple'
                            } transition-colors duration-300`}>
                            {skill.icon}
                          </span>
                          <span className="text-gray-800 dark:text-white font-semibold">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.3 + skillIndex * 0.1
                          }}
                          className={`h-2 rounded-full ${category.color === 'accent-purple' ? 'bg-gradient-to-r from-accent-purple to-accent-purple/70' :
                            category.color === 'accent-orange' ? 'bg-gradient-to-r from-accent-orange to-accent-orange/70' :
                              category.color === 'accent-blue' ? 'bg-gradient-to-r from-accent-blue to-accent-blue/70' :
                                category.color === 'accent-green' ? 'bg-gradient-to-r from-accent-green to-accent-green/70' :
                                  category.color === 'accent-pink' ? 'bg-gradient-to-r from-accent-pink to-accent-pink/70' :
                                    'bg-gradient-to-r from-accent-purple to-accent-purple/70'
                            }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
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
                className="p-4 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-xl hover:border-accent-purple/50 transition-colors cursor-pointer group shadow-sm dark:shadow-none hover:shadow-lg"
              >
                <div className="text-gray-400 group-hover:text-accent-purple transition-colors mb-2">
                  {tool.icon}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center p-8 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-green/10 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
            "I specialize in building scalable mobile and web applications with AI integration that deliver exceptional user experiences.
            My expertise in React Native, Flutter, modern web technologies, and AI/ML allows me to create
            intelligent cross-platform solutions that perform beautifully on any device."
          </p>
          <div className="text-accent-purple font-semibold">
            - Raphael Lee
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills