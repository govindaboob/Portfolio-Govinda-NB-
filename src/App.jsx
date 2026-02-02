import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Debug: Add console log to verify app is loading
  useEffect(() => {
    console.log('Portfolio App loaded successfully!')
  }, [])

  // Listen for navigation events from Hero section
  useEffect(() => {
    const handleNavigation = (event) => {
      const section = event.detail
      setActiveSection(section)
      
      // Handle About section scrolling on home page
      if (section === 'about') {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
          const aboutElement = document.getElementById('about')
          if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else if (section === 'experience') {
        // Handle Experience section - scroll to it within About page
        setActiveSection('about')
        setTimeout(() => {
          const experienceElement = document.getElementById('experience')
          if (experienceElement) {
            experienceElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        // For other sections, scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    
    window.addEventListener('navigateToSection', handleNavigation)
    return () => window.removeEventListener('navigateToSection', handleNavigation)
  }, [])

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
      case 'about':
      case 'experience':
        return (
          <>
            <Hero />
            <About />
          </>
        )
      case 'projects':
        return <Projects />
      case 'cv':
        return <CV />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        )
    }
  }

  return (
    <div className={`min-h-screen flex flex-col text-gray-800 relative overflow-x-hidden ${
      activeSection === 'home' 
        ? 'bg-gradient-to-br from-violet-50 via-indigo-100 via-purple-50 to-pink-100' 
        : 'bg-gradient-to-br from-slate-900 via-gray-900 to-black'
    }`}>
      {/* Animated Background with Particles */}
      <ParticleField particleCount={30} className="opacity-40" />
      
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 particle particle-1 animate-float opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 particle particle-2 animate-float delay-200 opacity-50"></div>
        <div className="absolute top-1/2 left-3/4 particle particle-3 animate-float delay-400 opacity-45"></div>
        <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-sparkle delay-1000 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full animate-sparkle delay-1500 opacity-80"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-float delay-800 opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rotate-45 animate-morphing delay-1200 opacity-55"></div>
      </div>
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}
