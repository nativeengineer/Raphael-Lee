import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChat, HiX, HiSparkles, HiLightBulb, HiCode, HiDeviceMobile, HiGlobeAlt, HiChip } from 'react-icons/hi'
import { useChatbot } from '../../contexts/ChatbotContext'

const AIChatbot = () => {
    const { isOpen, setIsOpen, isTyping, currentMessage, messages, isAnimating, clearMessages } = useChatbot()
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const getIcon = (iconType) => {
        switch (iconType) {
            case 'mobile': return <HiDeviceMobile className="text-accent-purple" size={20} />
            case 'web': return <HiGlobeAlt className="text-accent-orange" size={20} />
            case 'ai': return <HiSparkles className="text-accent-green" size={20} />
            case 'backend': return <HiCode className="text-accent-blue" size={20} />
            case 'devops': return <HiChip className="text-accent-pink" size={20} />
            case 'projects': return <HiCode className="text-accent-purple" size={20} />
            case 'experience': return <HiLightBulb className="text-accent-blue" size={20} />
            default: return <HiSparkles className="text-accent-purple" size={20} />
        }
    }

    return (
        <>
            {/* Floating Chatbot Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-accent-purple to-accent-blue text-white p-4 rounded-full shadow-2xl hover:shadow-accent-purple/25 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isAnimating ? { rotate: [0, 10, -10, 0] } : {}}
            >
                <motion.div
                    animate={isTyping ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                >
                    <HiChat size={24} />
                </motion.div>
            </motion.button>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-50 w-96 h-96 bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-accent-purple to-accent-blue p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <HiSparkles size={20} />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold">AI Assistant</h3>
                                        <p className="text-xs opacity-90">Click anything to learn more!</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/20 p-1 rounded-full transition-colors"
                                >
                                    <HiX size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto max-h-80">
                            {messages.length === 0 ? (
                                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                                    <HiLightBulb size={32} className="mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">Click on any skill, project, or section to get detailed explanations!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-gray-50 dark:bg-dark-card rounded-lg p-3"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                {message.icon}
                                                <span className="font-semibold text-sm text-gray-800 dark:text-white">
                                                    {message.title}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                                {message.content}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                {message.timestamp}
                                            </p>
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="bg-gray-50 dark:bg-dark-card rounded-lg p-3"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <HiSparkles className="text-accent-purple" size={16} />
                                                <span className="font-semibold text-sm text-gray-800 dark:text-white">
                                                    AI Assistant
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {currentMessage}
                                                <motion.span
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ duration: 0.8, repeat: Infinity }}
                                                >
                                                    |
                                                </motion.span>
                                            </p>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={clearMessages}
                                    className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                >
                                    Clear Chat
                                </button>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <HiSparkles size={12} />
                                    </motion.div>
                                    AI Powered
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Click Handlers */}
            <div className="hidden">
                {/* These will be triggered by other components */}
                <button onClick={() => handleClick('mobile-development')} />
                <button onClick={() => handleClick('web-development')} />
                <button onClick={() => handleClick('ai-ml')} />
                <button onClick={() => handleClick('backend-apis')} />
                <button onClick={() => handleClick('tools-devops')} />
            </div>
        </>
    )
}

export default AIChatbot
