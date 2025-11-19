// src/components/Profile.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown } from 'lucide-react'

const Profile = () => {
  const profileRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(profileRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo(imageRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' },
      '-=0.5'
    )
  }, [])

  return (
    <div ref={profileRef} className="text-center mb-8 animate-in">
      {/* Profile Image */}
     <div className="relative inline-block mb-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500 p-1 animate-glow">
          <div
            ref={imageRef}
            className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-lg font-bold backdrop-blur-sm"
          >
            <img src="https://ninedn.vercel.app/NanimeID-PFPs/img/Rika.gif" alt="PFP" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        {/* Online Status Indicator */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
      </div>

      {/* Profile Info */}
      <h2 className="text-2xl font-bold text-white mb-2">NineTwelve</h2>
      <p className="text-white/80 mb-3">Web Dev & Designer & Student</p>
      
      {/* Bio */}
      <div className="glass-dark rounded-2xl p-4 mb-4">
        <p className="text-white/70 text-sm leading-relaxed">
          Hello, I\'m NineTwelve!! 🔥 <br />
          Collecting <strong className="text-white">coding tips</strong> and also
          <strong className="text-white"> sharing open-source projects</strong>. <br />
          Check out my social media and services below ✨
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center space-x-6 text-center">         <div>
          <div className="text-white font-bold text-lg">83+</div>
          <div className="text-white/60 text-xs">Projects</div>
        </div>
        <div>
          <div className="text-white font-bold text-lg">1.5Y+</div>
          <div className="text-white/60 text-xs">Experience</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
