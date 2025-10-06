import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Enhanced particle system
    const particles = []
    const particleCount = 80
    const colors = [
      { r: 139, g: 92, b: 246 },   // Purple
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 16, g: 185, b: 129 },   // Green
      { r: 236, g: 72, b: 153 },   // Pink
      { r: 249, g: 115, b: 22 }    // Orange
    ]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        this.size = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.6 + 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        this.originalSize = this.size
        this.originalOpacity = this.opacity
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Add subtle floating motion
        this.x += Math.sin(time * 0.001 + this.y * 0.001) * 0.2
        this.y += Math.cos(time * 0.001 + this.x * 0.001) * 0.2

        // Pulsing effect
        this.size = this.originalSize + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.5
        this.opacity = this.originalOpacity + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.1

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`)
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Enhanced connection system with multiple colors
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (0.15 * (1 - distance / 120)) * (0.5 + 0.5 * Math.sin(time * 0.005))

            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )

            // Use particle colors for gradient
            gradient.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`)
            gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        }
      }

      // Add floating orbs that appear and disappear
      if (Math.random() < 0.02) {
        const orbX = Math.random() * canvas.width
        const orbY = Math.random() * canvas.height
        const orbSize = Math.random() * 100 + 50
        const orbColor = colors[Math.floor(Math.random() * colors.length)]

        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize)
        orbGradient.addColorStop(0, `rgba(${orbColor.r}, ${orbColor.g}, ${orbColor.b}, 0.1)`)
        orbGradient.addColorStop(1, `rgba(${orbColor.r}, ${orbColor.g}, ${orbColor.b}, 0)`)

        ctx.beginPath()
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2)
        ctx.fillStyle = orbGradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default ParticleBackground