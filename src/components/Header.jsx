// src/components/Header.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
  }, [])

  return (
    <header ref={headerRef} className="text-center mb-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2">
        
      </h1>
    </header>
  )
}

export default Header
