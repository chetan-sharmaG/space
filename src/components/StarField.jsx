import React, { useEffect, useRef } from 'react'
import './starField.css'

// Canvas based starfield — faster and lighter than many DOM nodes
const Starfield = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    let dpr = window.devicePixelRatio || 1

    function resize() {
      dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initStars()
    }

    function initStars() {
      const area = window.innerWidth * window.innerHeight
      const base = area > 1000 * 1000 ? 150 : area > 600 * 600 ? 90 : 45
      const count = Math.min(Math.max(base, 30), 300)

      starsRef.current = new Array(count).fill(0).map(() => {
        const speed = Math.random() * 0.6 + 0.2
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 1.8 + 0.2,
          alpha: Math.random() * 0.6 + 0.4,
          twinkle: Math.random() * 0.05,
          speed,
        }
      })
    }

    let last = performance.now()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function tick(now) {
      const dt = (now - last) / 1000
      last = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // small ambient gradient — transparent so page still reads
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, 'rgba(10,10,20,0.0)')
      grad.addColorStop(1, 'rgba(2,2,8,0.0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((s) => {
        if (!prefersReducedMotion) {
          // slightly faster movement to match previous feel while remaining performant
          s.y -= s.speed * (45 * dt)
          if (s.y < -10) s.y = window.innerHeight + 10
          s.x += Math.sin(now / 1000 + s.x) * 0.1
          s.alpha += (Math.sin(now * 0.001 * (s.twinkle * 100 + 1)) * 0.5) * s.twinkle
          if (s.alpha > 1) s.alpha = 1
          if (s.alpha < 0.2) s.alpha = 0.2
        }

        ctx.beginPath()
        ctx.globalAlpha = s.alpha
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      role="presentation"
      aria-hidden="true"
    />
  )
}

export default React.memo(Starfield)
