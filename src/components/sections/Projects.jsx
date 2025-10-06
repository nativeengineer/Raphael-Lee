import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiX } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { SiReact, SiFlutter, SiUnity, SiTensorflow, SiFirebase } from 'react-icons/si'
import ProjectImageCarousel from '../ui/ProjectImageCarousel'
import { useChatbot } from '../../contexts/ChatbotContext'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "TryVariant",
      category: "AI/ML • Game Development",
      description: "An intelligent game creation platform that uses AI to generate game mechanics, art assets, and storylines.",
      fullDescription: "A revolutionary platform that democratizes game development by leveraging artificial intelligence. Users can describe their game ideas in natural language, and the AI generates complete game prototypes including mechanics, visual assets, and narrative elements. Built with a microservices architecture for scalability and real-time collaboration features.",
      images: [
        "/projects/ai-game-generator.png",
        "/projects/ai-game-generator-2.png"
      ],
      technologies: [
        { name: "Flutter", icon: <SiFlutter size={20} />, color: "text-blue-400" },
        { name: "TensorFlow", icon: <SiTensorflow size={20} />, color: "text-orange-400" },
        { name: "Unity", icon: <SiUnity size={20} />, color: "text-gray-400" },
        { name: "Firebase", icon: <SiFirebase size={20} />, color: "text-yellow-400" }
      ],
      features: [
        "AI-powered game mechanics generation",
        "Procedural art asset creation",
        "Real-time multiplayer collaboration",
        "Cross-platform deployment",
        "Social sharing and community features"
      ],
      links: {
        demo: "https://demo.variantbeta.ai/signin",
        github: "https://github.com/nativeengineer/AI-Game-Generator"
      },
      status: "In Development",
      color: "accent-purple"
    },
    {
      id: 2,
      title: "TopHap Explorer",
      category: "React Native • AR • Maps",
      description: "An immersive real estate exploration app with AR visualization and advanced mapping features.",
      fullDescription: "A cutting-edge real estate application that transforms property hunting through augmented reality and intelligent data visualization. Users can explore neighborhoods, visualize property data in 3D space, and make informed decisions with AI-powered market insights. Features include virtual property tours, neighborhood analytics, and personalized recommendations.",
      images: [
        "/projects/tophap-1.png",
        "/projects/tophap-2.png",
        "/projects/tophap-3.png"
      ],
      technologies: [
        { name: "React Native", icon: <SiReact size={20} />, color: "text-blue-400" },
        { name: "ARKit", icon: <HiCode size={20} />, color: "text-green-400" },
        { name: "Maps API", icon: <HiCode size={20} />, color: "text-red-400" },
        { name: "Firebase", icon: <SiFirebase size={20} />, color: "text-yellow-400" }
      ],
      features: [
        "Augmented reality property visualization",
        "Interactive 3D mapping interface",
        "Real-time market data integration",
        "AI-powered property recommendations",
        "Virtual property tours"
      ],
      links: {
        demo: "https://apps.apple.com/us/app/tophap-explorer/id1551845829",
        github: ""
      },
      status: "Live",
      color: "accent-blue"
    },
    {
      id: 3,
      title: "React E-Commerce Store",
      category: "E-commerce • Retail • Games Store",
      description: "An e-commerce store built with React that imitates a game store. It includes features like dedicated game pages, search functionality, genre & rating filters, a “like” feature, and wishlist. It’s responsive and tested using Jest. ",
      fullDescription: "This is a React application that simulates a game store experience. It allows users to browse games, filter them by genre or rating, search for specific games, and maintain a wishlist and “liked” items. It also provides individual pages for each game, smooth UI animations, responsive design for different screen sizes, and is rigorously tested (unit and integration tests) using Jest.The author created it partly as a sandbox to experiment with organizing a larger React codebase, performance improvements (including use of CDN), routing, motion libraries for UI, and ensuring best practices in front-end development. ",
      images: [
        "/projects/game-store-1.png",
        "/projects/game-store-2.png",
        "/projects/game-store-3.png",
        "/projects/game-store-4.png"
      ],
      technologies: [
        { name: "React", icon: <SiReact size={20} />, color: "text-blue-400" },
        { name: "Node.js", icon: <HiCode size={20} />, color: "text-green-400" },
        { name: "Stripe", icon: <HiCode size={20} />, color: "text-purple-400" }
      ],
      features: [
        "Dedicated game pages",
        "Search functionality",
        "Genre & rating filters",
        "Responsive design",
        "Testing using Jest",
        "Performance improvements"
      ],
      links: {
        demo: "https://gianlucajahn.github.io/react-ecommerce-store/",
        github: ""
      },
      status: "Live",
      color: "accent-green"
    },
    {
      id: 4,
      title: "Flutter Mobile Banking App",
      category: "Mobile Application",
      description: "A mobile banking application built with Flutter, showcasing a clean, modern banking UI inspired by Dribbble designs.",
      fullDescription: "This project is an open-source mobile banking app prototype created using Flutter (Dart). It is designed to demonstrate banking user flows and UI components such as login, dashboard, transactions, and account details. The app emphasizes design and user experience, featuring sleek layouts, smooth navigation, and reusable UI components. While it looks like a real banking app, it is primarily a demo / learning project and does not include a live backend or production-grade security. The goal of the repository is to serve as a portfolio project and learning material for Flutter developers who want to explore how to build professional-looking financial apps with Flutter.",
      images: [
        "/projects/bank-app-1.png",
        "/projects/bank-app-2.png",
        "/projects/bank-app-3.png"
      ],
      technologies: [
        { name: "Flutter", icon: <SiFlutter size={20} />, color: "text-blue-400" },
        { name: "Firebase", icon: <SiFirebase size={20} />, color: "text-yellow-400" }
      ],
      features: [
        "Login & Authentication UI (mock/demo)",
        "Banking Dashboard with account overview",
        "Transaction History screen",
        "Financial Summary / Balance tracking UI",
        "Transfers & Payments UI (prototype)"
      ],
      links: {
        demo: "",
        github: "https://github.com/nativeengineer/Flutter-Bank-App"
      },
      status: "Completed",
      color: "accent-purple"
    },
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            A showcase of innovative solutions and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => {
                setSelectedProject(project)
                handleClick('projects')
              }}
              className="card cursor-pointer group hover:border-accent-purple/50"
            >
              {/* Project Image Carousel */}
              <div className="w-full h-48 rounded-lg mb-4 relative">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  autoPlay={true}
                  interval={5000}
                  className="w-full h-full"
                />
                {/* Project status badge */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${project.color} text-white shadow-lg backdrop-blur-sm`}>
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent-purple font-medium mb-2">
                    {project.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-dark-card rounded-full text-xs"
                    >
                      <span className={tech.color}>
                        {tech.icon}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="px-3 py-1 bg-gray-100 dark:bg-dark-card rounded-full text-xs text-gray-600 dark:text-gray-400 font-medium">
                      +{project.technologies.length - 3}
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="text-sm text-accent-purple hover:text-gray-800 dark:hover:text-white transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Widget */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="card max-w-md mx-auto">
            <FaGithub className="text-4xl text-accent-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">GitHub Activity</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-accent-purple">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Repositories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-blue">0.2k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Contributions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-surface border border-gray-700 rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-accent-purple font-medium">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Project Image Carousel */}
                  <div className="w-full h-64 rounded-lg">
                    <ProjectImageCarousel
                      images={selectedProject.images}
                      title={selectedProject.title}
                      autoPlay={false} // Manual control in modal
                      interval={6000}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-gray-700 rounded-lg"
                        >
                          <span className={tech.color}>
                            {tech.icon}
                          </span>
                          <span className="text-white">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <HiExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaGithub size={20} />
                      Source Code
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">About This Project</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-accent-purple rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Projects