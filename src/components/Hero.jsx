import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const name = "Govinda Nawalkishor Boob"
  const mobileNameLines = ["Govinda", "Nawalkishor", "Boob"]

  useEffect(() => {
    // Optimized scroll handling for better responsiveness
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500 // Tighter animation range for better control
      const minScroll = 80 // Start earlier for smoother transition
      
      // Calculate progress (0 to 1) with easing
      let progress = 0
      if (scrollPosition > minScroll) {
        const rawProgress = (scrollPosition - minScroll) / (maxScroll - minScroll)
        // Apply ease-out curve for smoother animation
        progress = Math.min(1 - Math.pow(1 - rawProgress, 3), 1)
      }
      
      setScrollProgress(progress)
    }
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calculateLetterTransform = (index) => {
    const nameLength = name.length
    const letterDelay = (index / nameLength) * 0.2 // Reduced delay for more responsive feel
    const adjustedProgress = Math.max(0, Math.min(1, (scrollProgress - letterDelay)))
    
    if (adjustedProgress <= 0) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1
      }
    }
    
    // Apply smoother easing for slow scrolling
    const easedProgress = adjustedProgress * adjustedProgress * (3 - 2 * adjustedProgress) // Smoothstep
    
    // Calculate position with smoother curves
    const translateX = -easedProgress * 600 // Reduced distance for better control
    const translateY = -easedProgress * 150 // Smoother vertical movement
    const scale = 1 - (easedProgress * 0.3) // Less dramatic scaling
    
    // Improved opacity curve for seamless transition
    let opacity = 1
    if (easedProgress > 0.6) {
      opacity = Math.max(0, 1 - ((easedProgress - 0.6) / 0.4))
    } else {
      opacity = Math.max(0.4, 1 - easedProgress * 0.6)
    }
    
    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
      opacity: opacity
    }
  }

  const renderScrollDrivenName = () => {
    return name.split('').map((letter, index) => {
      const letterStyle = calculateLetterTransform(index)
      
      return (
        <span
          key={index}
          className="text-gradient-fire letter-scroll-fly"
          style={{
            position: 'relative',
            zIndex: 50,
            ...letterStyle
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      )
    })
  }

  const renderMobileName = () => {
    return mobileNameLines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split('').map((letter, index) => {
          const globalIndex = mobileNameLines.slice(0, lineIndex).join('').length + lineIndex + index
          const letterStyle = calculateLetterTransform(globalIndex)
          
          return (
            <span
              key={`${lineIndex}-${index}`}
              className="text-gradient-fire letter-scroll-fly"
              style={{
                position: 'relative',
                zIndex: 50,
                ...letterStyle
              }}
            >
              {letter}
            </span>
          )
        })}
      </div>
    ))
  }
  return (
    <section id="home" className="relative bg-gradient-to-br from-violet-100 via-indigo-50 via-purple-100 to-pink-50 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/25 to-cyan-400/25 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full blur-2xl animate-morphing"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-teal-300/25 to-emerald-400/25 rounded-full blur-3xl animate-float delay-1000"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-1/5 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-32 right-1/5 w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-500 rotate-45 animate-float delay-500 opacity-70"></div>
      <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-float delay-1500 opacity-50"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-float delay-800 opacity-60"></div>
      
      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute top-20 left-10 particle particle-1 animate-float opacity-70"></div>
      <div className="absolute top-40 right-20 particle particle-2 animate-float delay-200 opacity-60"></div>
      <div className="absolute bottom-20 left-20 particle particle-3 animate-float delay-400 opacity-80"></div>
      <div className="absolute top-60 left-1/3 particle particle-1 animate-float delay-700 opacity-50"></div>
      <div className="absolute bottom-40 right-1/3 particle particle-2 animate-float delay-1000 opacity-65"></div>
      
      {/* Dynamic Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white rounded-full animate-sparkle opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-sparkle delay-1000 opacity-90"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-sparkle delay-2000 opacity-70"></div>
        <div className="absolute top-1/6 right-1/3 w-2.5 h-2.5 bg-purple-300 rounded-full animate-sparkle delay-1500 opacity-60"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-sparkle delay-500 opacity-85"></div>
      </div>
      
      {/* Morphing Shapes */}
      <div className="absolute top-32 right-10 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 animate-morphing"></div>
      <div className="absolute bottom-32 left-5 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-orange-200/40 animate-morphing" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
        <div className="animate-fadeInDown">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <div className="mb-2">Hi, I'm</div>
            <span className="relative inline-block" id="hero-name">
              {/* Desktop version - single line */}
              <span className="hero-name-enhanced animate-gradient hover-glow transition-all duration-500 hover:scale-110 hover:rotate-1 hidden sm:inline hero-name-container">
                {renderScrollDrivenName()}
              </span>
              {/* Mobile version - 3 lines */}
              <span className="hero-name-enhanced animate-gradient hover-glow transition-all duration-500 hover:scale-110 hover:rotate-1 sm:hidden hero-name-container">
                {renderMobileName()}
              </span>
              <div className={`absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-2xl animate-pulse-slow transition-all duration-300 ${
                scrollProgress > 0.4 ? 'opacity-0' : 'opacity-100'
              }`}></div>
              {/* Enhanced Sparkle effects */}
              <div className={`absolute -top-3 -left-3 w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-sparkle transition-opacity duration-300 ${
                scrollProgress > 0.4 ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`absolute -top-2 -right-4 w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-sparkle delay-500 transition-opacity duration-300 ${
                scrollProgress > 0.4 ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`absolute -bottom-3 -right-2 w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-sparkle delay-1000 transition-opacity duration-300 ${
                scrollProgress > 0.4 ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`absolute -bottom-2 -left-4 w-2 h-2 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full animate-sparkle delay-750 transition-opacity duration-300 ${
                scrollProgress > 0.4 ? 'opacity-0' : 'opacity-100'
              }`}></div>
            </span>
          </h1>
        </div>
        
        <div className="animate-fadeInUp delay-300">
          <p className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            A passionate{' '}
            <span className="font-mono bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold animate-wiggle">software developer</span>{' '}
            turning ideas into delightful, modern web experiences.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-bounce-in delay-500">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'projects' }))}
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-2xl hover-glow hover-lift transition-all duration-500 font-heading font-semibold text-lg animate-gradient"
          >
            <span className="flex items-center justify-center">
              See My Work
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'cv' }))}
            className="group w-full sm:w-auto px-8 py-4 border-3 border-indigo-600 text-indigo-600 rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-500 transform hover-lift font-heading font-semibold text-lg glass"
          >
            <span className="flex items-center justify-center">
              View CV
              <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
