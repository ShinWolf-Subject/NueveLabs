// src/components/Footer.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Star } from 'lucide-react'

const Footer = () => {
  const footerRef = useRef(null)
  const heartRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    
    tl.to(heartRef.current, {
      scale: 1.2,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    )
  }, [])

  return (
    <footer ref={footerRef} className="text-center animate-in">
      <div className="glass-dark rounded-2xl p-4 border border-white/10">
        <p className="text-white/70 text-sm flex items-center justify-center space-x-2">
          <span ref={heartRef} className="text-amber-500">
            <Star size={16} fill="currentColor" />
          </span>
          <span>Made by NineTwelve</span>
        </p>
        <p className="text-white/50 text-xs mt-2">
          © {new Date().getFullYear()} NueveLabs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
