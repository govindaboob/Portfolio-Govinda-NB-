import React, { useState, useEffect } from 'react'

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showNameInNav, setShowNameInNav] = useState(false)
  const [navOpacity, setNavOpacity] = useState(0)

  useEffect(() => {
    // Immediately reset navbar name when switching to home section
    if (activeSection === 'home') {
      setNavOpacity(0)
      setShowNameInNav(false)
    }
  }, [activeSection])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Auto-detect section based on scroll position
      if (activeSection === 'about' || activeSection === 'home') {
        const aboutElement = document.getElementById('about')
        const aboutOffset = aboutElement ? aboutElement.offsetTop - 100 : 800 // Fallback offset
        
        if (scrollPosition < 100) {
          // At top - should be home
          if (activeSection === 'about') {
            setActiveSection('home')
          }
        } else if (scrollPosition >= aboutOffset) {
          // Reached about section - should be about
          if (activeSection === 'home') {
            setActiveSection('about')
          }
        }
      }
      
      if (activeSection === 'home' || activeSection === 'about') {
        // For both home and about (same page), check scroll position
        const minScroll = 250 // Match hero animation timing
        const maxScroll = 420 // Tighter range for better sync
        
        if (scrollPosition >= minScroll) {
          const rawProgress = (scrollPosition - minScroll) / (maxScroll - minScroll)
          // Apply same easing as hero for consistency
          const progress = Math.min(1 - Math.pow(1 - rawProgress, 3), 1)
          setNavOpacity(progress)
          setShowNameInNav(progress > 0.2)
        } else {
          setNavOpacity(0)
          setShowNameInNav(false)
        }
      } else {
        setShowNameInNav(true)
        setNavOpacity(1)
      }
    }
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, setActiveSection])

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Projects', key: 'projects' },
    { name: 'CV', key: 'cv' },
    { name: 'Contact', key: 'contact' }
  ]

  const handleNavClick = (sectionKey) => {
    setActiveSection(sectionKey)
    setIsOpen(false)
    
    // Only hide navbar name when navigating to home section
    if (sectionKey === 'home') {
      setNavOpacity(0)
      setShowNameInNav(false)
    }
    
    // Handle About section scrolling on home page
    if (sectionKey === 'about') {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const aboutElement = document.getElementById('about')
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // For other sections, scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 border-b border-white/20 shadow-2xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Name - smooth scroll-driven visibility */}
          <div className="relative overflow-hidden h-14 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="font-display font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl transition-all duration-300 ease-out text-gradient-fire hover:scale-110 hover:rotate-1 transform-gpu whitespace-nowrap navbar-name"
              style={{
                opacity: navOpacity,
                transform: `translateY(${(1 - navOpacity) * 20}px) scale(${0.8 + navOpacity * 0.2})`
              }}
            >
              Govinda Nawalkishor Boob
            </button>
          </div>
          
          {/* Desktop Nav - Enhanced */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.key)}
                className={`relative px-4 py-2 font-heading font-bold text-sm lg:text-base transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group ${
                  activeSection === item.key 
                    ? 'text-yellow-300 bg-white/20 rounded-xl shadow-lg'
                    : 'text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-xl'
                } animate-bounce-in`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                  activeSection === item.key 
                    ? 'w-3/4 bg-gradient-to-r from-yellow-400 to-pink-400' 
                    : 'w-0 group-hover:w-3/4 bg-gradient-to-r from-indigo-400 to-purple-400'
                }`}></span>
                
                {/* Glowing effect for active item */}
                {activeSection === item.key && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm -z-10 animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button - Enhanced */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 text-white bg-white/20 hover:bg-white/30 shadow-lg"
          >
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-xl animate-slideInDown">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.key)}
                  className={`text-left px-6 py-4 text-base font-heading font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    activeSection === item.key 
                      ? 'text-yellow-300 bg-white/20 shadow-lg border border-white/30'
                      : 'text-white/90 hover:text-yellow-300 hover:bg-white/10'
                  } animate-slideInRight`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-current mr-3 opacity-60"></span>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}