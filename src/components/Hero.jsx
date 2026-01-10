import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const name = "Govinda Nawalkishor Boob"
  const desktopNameLines = ["Govinda Nawalkishor", "Boob"]
  const mobileNameLines = ["Govinda", "Nawalkishor Boob"]

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

  const renderDesktopName = () => {
    return desktopNameLines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split('').map((letter, index) => {
          const globalIndex = desktopNameLines.slice(0, lineIndex).join('').length + lineIndex + index
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
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          )
        })}
      </div>
    ))
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
          {/* Mobile: Vertical layout - Image above, name below */}
          <div className="flex flex-col items-center text-center lg:hidden w-full space-y-4">
            {/* Mobile Image - Top */}
            <div className="flex-shrink-0">
              <div className="relative group animate-fadeInDown delay-300">
                {/* Subtle outer glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200/30 via-purple-200/30 to-pink-200/30 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main Image Container - Centered for mobile */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-white/60 backdrop-blur-sm shadow-xl transition-all duration-700 animate-gentle-float">
                  <img 
                    src="/govinda-boob.JPG" 
                    alt="Govinda Nawalkishor Boob"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white" style={{display: 'none'}}>
                    <div className="text-xl font-bold">GNB</div>
                  </div>
                </div>
                
                {/* Minimal floating dots for mobile */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-gentle-pulse opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-gentle-pulse opacity-50" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Mobile Content - Below image */}
            <div className="w-full">
              <div className="animate-fadeInUp delay-500">
                <div className="mb-2 text-lg sm:text-xl text-gray-600 font-medium">Hi, I'm</div>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  <span className="relative inline-block" id="hero-name-mobile">
                    <span className="hero-name-enhanced animate-gradient hover-glow transition-all duration-500 block">
                      <div className="text-gradient-fire">Govinda</div>
                      <div className="text-gradient-fire">Nawalkishor Boob</div>
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop: Left side - Content */}
          <div className="flex-1 text-center lg:text-left hidden lg:block lg:pr-8">
            <div className="animate-fadeInDown">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <div className="mb-2">Hi, I'm</div>
                <span className="relative inline-block" id="hero-name">
                  {/* Desktop version - multi-line */}
                  <span className="hero-name-enhanced animate-gradient hover-glow transition-all duration-500 hover:scale-110 hover:rotate-1 hero-name-container block">
                    {renderDesktopName()}
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
              <p className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
                A passionate{' '}
                <span className="font-mono bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold animate-wiggle">software developer</span>{' '}
                turning ideas into delightful, modern web experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 animate-bounce-in delay-500">
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
          </div>

          {/* Mobile: Description and buttons */}
          <div className="w-full text-center lg:hidden">
            <div className="animate-fadeInUp delay-700">
              <p className="font-heading text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-md mx-auto">
                A passionate{' '}
                <span className="font-mono bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">software developer</span>{' '}
                turning ideas into delightful web experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-bounce-in delay-900">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'projects' }))}
                className="group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-xl hover-glow hover-lift transition-all duration-500 font-heading font-semibold text-base animate-gradient"
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
                className="group w-full sm:w-auto px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-500 transform hover-lift font-heading font-semibold text-base"
              >
                <span className="flex items-center justify-center">
                  View CV
                  <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-shrink-0 lg:flex-shrink-0 hidden lg:block lg:w-auto">
            <div className="relative group animate-fadeInRight delay-700">
              {/* Animated background particles */}
              <div className="absolute -inset-12 opacity-30">
                <div className="absolute top-4 right-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-orbital"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-orbital-reverse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 right-2 w-1 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-orbital" style={{animationDelay: '4s'}}></div>
              </div>
              
              {/* Layered glow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-indigo-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-gentle-pulse opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-300/25 via-pink-300/25 to-cyan-300/25 rounded-full blur-xl animate-breathe opacity-50"></div>
              
              {/* Rotating subtle ring */}
              <div className="absolute -inset-4 rounded-full animate-slow-rotate opacity-40">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-indigo-300/30 via-purple-300/30 via-pink-300/30 to-transparent"></div>
              </div>
              
              {/* Main Image Container - Larger size */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden border-4 border-white/50 backdrop-blur-sm shadow-2xl group-hover:shadow-3xl transition-all duration-700 animate-gentle-float group-hover:animate-hover-lift">
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transform: 'translateX(-100%)'}}></div>
                
                {/* Image */}
                <img 
                  src="/govinda-boob.JPG" 
                  alt="Govinda Nawalkishor Boob"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Enhanced Fallback Design */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white animate-gradient-shift" style={{display: 'none'}}>
                  <div className="text-6xl lg:text-7xl font-bold animate-gentle-pulse">GNB</div>
                </div>
                
                {/* Dynamic border highlight */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400/0 via-pink-400/50 to-purple-400/0 opacity-0 group-hover:opacity-100 animate-border-flow transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-3 -right-4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float-complex opacity-70 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-5 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-float-complex opacity-60 shadow-lg" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/4 -left-6 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float-complex opacity-50 shadow-lg" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
