import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiStar, HiCalendar } from 'react-icons/hi'

const Timeline = ({ experiences = [] }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const getIcon = (type) => {
        switch (type) {
            case 'work':
                return <HiBriefcase className="text-accent-blue" size={20} />
            case 'education':
                return <HiAcademicCap className="text-accent-purple" size={20} />
            case 'achievement':
                return <HiStar className="text-accent-pink" size={20} />
            default:
                return <HiCalendar className="text-accent-green" size={20} />
        }
    }

    const getTypeColor = (type) => {
        switch (type) {
            case 'work':
                return 'border-accent-blue bg-accent-blue/10'
            case 'education':
                return 'border-accent-purple bg-accent-purple/10'
            case 'achievement':
                return 'border-accent-pink bg-accent-pink/10'
            default:
                return 'border-accent-green bg-accent-green/10'
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative"
        >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink"></div>

            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative flex items-start gap-6"
                    >
                        {/* Timeline Dot */}
                        <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${getTypeColor(experience.type)} bg-white dark:bg-dark-bg shadow-lg`}>
                            {getIcon(experience.type)}
                        </div>

                        {/* Content Card */}
                        <motion.div
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="flex-1 card p-6 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                        {experience.title}
                                    </h3>
                                    <p className="text-accent-purple font-semibold text-lg">
                                        {experience.company}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                    <HiCalendar size={16} />
                                    <span className="font-medium">{experience.duration}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {experience.description}
                            </p>

                            {/* Technologies/Skills */}
                            {experience.technologies && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Achievements */}
                            {experience.achievements && (
                                <ul className="space-y-2">
                                    {experience.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="text-accent-green mt-1">•</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Timeline
