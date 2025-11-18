// src/App.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Header from './components/Header'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline()

    tl.fromTo('.animate-in', 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power3.out'
      }
    )

    // Background particles animation
    const particles = document.querySelectorAll('.particle')
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        rotation: 'random(-180, 180)',
        duration: 'random(10, 20)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      })
    })
  }, [])

  return (
    <div
      ref={appRef}
      className="min-h-screen bg-[rgba(11,11,14,1)] bg-[radial-gradient(circle_at_10%_20%,rgba(88,28,135,0.25),transparent_60%),radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_65%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.25),transparent_60%)] relative overflow-hidden"
    >      {/* Animated Background Particles */}
    <div className="absolute inset-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div
      key={i}
      className="particle absolute w-2 h-2 bg-purple-500/20 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
      }}
      />
    ))}
    </div>

    {/* Glassmorphism Container */}
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-md animate-in">
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/10 p-8">
    <Header />
    <Profile />
    <Links />
    <Footer />
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
