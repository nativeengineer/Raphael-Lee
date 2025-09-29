import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectImageCarousel = ({ 
  images = [], 
  title = '', 
  autoPlay = true, 
  interval = 4000, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [failedImages, setFailedImages] = useState(new Set())

  // Handle image load error by image URL
  const handleImageError = (imageUrl) => {
    setFailedImages(prev => new Set([...prev, imageUrl]))
  }

  // Filter out failed images
  const validImages = images.filter((imageUrl) => !failedImages.has(imageUrl))

  // Auto-play functionality - use validImages length
  useEffect(() => {
    if (!autoPlay || validImages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= validImages.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, validImages.length])

  // Reset currentIndex if it's out of bounds
  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(0)
    }
  }, [validImages.length, currentIndex])

  // Fallback if no images or all failed
  if (validImages.length === 0) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-green/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 mx-auto mb-3 opacity-50">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <p className="text-sm">No images available</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full rounded-lg overflow-hidden ${className}`}>
      {/* Main image display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={validImages[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoading(false)}
            onError={() => handleImageError(validImages[currentIndex])}
            loading="lazy"
          />
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-2 border-accent-purple border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {validImages.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
          {currentIndex + 1} / {validImages.length}
        </div>
      )}

      {/* Manual navigation arrows (visible on hover) */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex(currentIndex === 0 ? validImages.length - 1 : currentIndex - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex(currentIndex === validImages.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default ProjectImageCarousel