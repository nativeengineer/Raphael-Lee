import { createContext, useContext, useState } from 'react'

const ChatbotContext = createContext()

export const useChatbot = () => {
    const context = useContext(ChatbotContext)
    if (!context) {
        throw new Error('useChatbot must be used within a ChatbotProvider')
    }
    return context
}

export const ChatbotProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [currentMessage, setCurrentMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [isAnimating, setIsAnimating] = useState(false)

    const explanations = {
        'mobile-development': {
            title: 'Mobile Development Expertise',
            content: `I specialize in cross-platform mobile development using React Native and Flutter. With 6+ years of experience, I've built 40+ mobile applications that deliver native performance across iOS and Android platforms.

Key Capabilities:
• React Native: 95% proficiency - Building scalable, performant mobile apps
• Flutter: 90% proficiency - Creating beautiful, fast cross-platform solutions
• iOS Development: 85% proficiency - Native iOS app development
• Android Development: 85% proficiency - Native Android app development

I focus on clean architecture, performance optimization, and exceptional user experiences that work seamlessly across all devices.`,
            icon: 'mobile'
        },
        'web-development': {
            title: 'Modern Web Development',
            content: `I create responsive, performant web applications using the latest technologies and frameworks. My expertise spans the full web development stack.

Key Technologies:
• React: 95% proficiency - Building dynamic, interactive user interfaces
• Next.js: 92% proficiency - Full-stack React framework with SSR/SSG
• TypeScript: 90% proficiency - Type-safe JavaScript development
• JavaScript: 95% proficiency - Core web development language

I specialize in creating scalable web applications with modern architecture, performance optimization, and responsive design that works perfectly across all devices and browsers.`,
            icon: 'web'
        },
        'ai-ml': {
            title: 'AI & Machine Learning Integration',
            content: `I integrate cutting-edge AI and machine learning capabilities into mobile and web applications, creating intelligent user experiences.

AI Expertise:
• LLM Integration: 90% proficiency - OpenAI API, Claude, GPT integration
• Prompt Engineering: 92% proficiency - Advanced prompt design and optimization
• AI Automation: 88% proficiency - Intelligent automation solutions
• Machine Learning: 85% proficiency - ML model integration and deployment

I specialize in building AI-powered applications that leverage large language models, automation, and intelligent features to create next-generation user experiences.`,
            icon: 'ai'
        },
        'backend-apis': {
            title: 'Backend & API Development',
            content: `I build robust backend systems and APIs that power modern mobile and web applications.

Backend Expertise:
• Node.js: 90% proficiency - Server-side JavaScript development
• REST APIs: 92% proficiency - RESTful API design and implementation
• GraphQL: 85% proficiency - Modern API query language
• Database Design: 88% proficiency - Efficient database architecture

I focus on creating scalable, secure, and performant backend systems that support high-traffic applications with clean API design and efficient data management.`,
            icon: 'backend'
        },
        'tools-devops': {
            title: 'Tools & DevOps',
            content: `I use modern development tools and DevOps practices to ensure efficient, reliable software delivery.

DevOps Expertise:
• Git & GitHub: 95% proficiency - Version control and collaboration
• Docker: 85% proficiency - Containerization and deployment
• CI/CD: 88% proficiency - Continuous integration and deployment
• AWS: 80% proficiency - Cloud infrastructure and services

I implement best practices for code management, automated testing, and deployment pipelines to ensure reliable, scalable software delivery.`,
            icon: 'devops'
        },
        'projects': {
            title: 'Featured Projects',
            content: `I've developed a diverse portfolio of mobile and web applications that showcase my technical expertise and problem-solving abilities.

Project Highlights:
• AI Game Generator - React Native app with AI integration
• TopHap Explorer - AR property visualization app
• React E-Commerce Store - Full-stack web application
• Flutter Banking App - Cross-platform mobile banking solution

Each project demonstrates different aspects of my skillset, from cross-platform mobile development to modern web frameworks and AI integration.`,
            icon: 'projects'
        },
        'experience': {
            title: 'Professional Experience',
            content: `With 6+ years of experience in mobile and web development, I've built a strong foundation in creating scalable, performant applications.

Experience Highlights:
• 40+ Mobile Apps Built - Cross-platform and native applications
• 25+ Web Projects - Modern web applications and platforms
• 100% Client Satisfaction - Delivering exceptional results
• AI Integration - Cutting-edge AI/ML implementation

I've worked with startups, enterprises, and everything in between, always focusing on clean code, performance optimization, and exceptional user experiences.`,
            icon: 'experience'
        }
    }

    const typeMessage = (text, callback) => {
        setIsTyping(true)
        setCurrentMessage('')
        let i = 0
        const timer = setInterval(() => {
            if (i < text.length) {
                setCurrentMessage(text.slice(0, i + 1))
                i++
            } else {
                clearInterval(timer)
                setIsTyping(false)
                if (callback) callback()
            }
        }, 30)
    }

    const handleClick = (elementType) => {
        if (!isOpen) {
            setIsOpen(true)
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }

        const explanation = explanations[elementType]
        if (explanation) {
            const newMessage = {
                id: Date.now(),
                type: 'bot',
                title: explanation.title,
                content: explanation.content,
                icon: explanation.icon,
                timestamp: new Date().toLocaleTimeString()
            }

            setMessages(prev => [...prev, newMessage])
            typeMessage(explanation.content, () => {
                setMessages(prev => [...prev, { ...newMessage, content: explanation.content }])
            })
        }
    }

    const clearMessages = () => {
        setMessages([])
    }

    const value = {
        isOpen,
        setIsOpen,
        isTyping,
        currentMessage,
        messages,
        isAnimating,
        handleClick,
        clearMessages
    }

    return (
        <ChatbotContext.Provider value={value}>
            {children}
        </ChatbotContext.Provider>
    )
}
