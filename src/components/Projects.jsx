import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const categories = [
  { name: 'All', filter: 'all' },
  { name: 'Web Apps', filter: 'webapp' },
  { name: 'Landing Pages', filter: 'landing' },
  { name: 'Tools', filter: 'tool' }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // Function to open project details in a new window/tab
  const openProjectDetails = (project) => {
    const projectDetailsHTML = generateProjectDetailsHTML(project)
    const newWindow = window.open('', '_blank')
    newWindow.document.write(projectDetailsHTML)
    newWindow.document.close()
  }

  return (
    <section id="projects" className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
      </div>
      
      {/* Interactive Elements */}
      <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-emerald-400 rounded-full animate-sparkle"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-sparkle delay-500"></div>
      <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-cyan-400 rounded-full animate-sparkle delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 pt-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">Featured Projects</span>
          </h2>
          <p className="font-heading text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my creative solutions and technical expertise 🎨
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp delay-200">
          {categories.map((category) => (
            <button
              key={category.filter}
              onClick={() => setActiveFilter(category.filter)}
              className={`px-8 py-3 rounded-full font-heading font-semibold transition-all duration-300 hover-lift ${
                activeFilter === category.filter
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`animate-fadeInUp ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} grid gap-8 lg:gap-12 items-center`}
              style={{animationDelay: `${400 + index * 200}ms`}}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Demo */}
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} relative group`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative">
                    {/* Project-specific animated visuals */}
                    {project.title === 'Health Monitoring System' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900/20 to-emerald-900/20">
                        {/* Continuous ECG Monitor */}
                        <div className="absolute inset-0 overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                            {/* Grid lines */}
                            <defs>
                              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(16, 185, 129, 0.1)" strokeWidth="0.5"/>
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            
                            {/* Continuous ECG wave */}
                            <path 
                              d="M-50 100 L0 100 L10 100 L15 80 L20 100 L25 60 L30 140 L35 100 L50 100 L60 100 L65 85 L70 110 L75 70 L80 130 L85 100 L100 100 L110 100 L115 90 L120 105 L125 75 L130 125 L135 100 L150 100 L200 100 L210 100 L215 82 L220 98 L225 65 L230 135 L235 100 L250 100 L300 100 L310 100 L315 88 L320 102 L325 72 L330 128 L335 100 L350 100 L400 100 L450 100" 
                              fill="none" 
                              stroke="rgb(16, 185, 129)" 
                              strokeWidth="2"
                              className="animate-ecg-wave"
                            />
                            
                            {/* Moving heartbeat indicator */}
                            <circle r="3" fill="rgb(16, 185, 129)" className="animate-ecg-pulse">
                              <animateMotion dur="3s" repeatCount="indefinite">
                                <path d="M0 100 L400 100" />
                              </animateMotion>
                            </circle>
                          </svg>
                        </div>
                        
                        {/* Medical data overlay */}
                        <div className="absolute top-4 left-4 space-y-1">
                          <div className="text-xs text-emerald-400 font-mono">HR: <span className="text-emerald-300 animate-pulse">72 BPM</span></div>
                          <div className="text-xs text-emerald-400 font-mono">BP: <span className="text-emerald-300 animate-pulse">120/80</span></div>
                          <div className="text-xs text-emerald-400 font-mono">O2: <span className="text-emerald-300 animate-pulse">98%</span></div>
                        </div>
                        
                        {/* Status indicator */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                            <span className="text-xs text-emerald-400 font-mono">MONITORING</span>
                          </div>
                        </div>
                        
                        {/* Central medical icon */}
                        <div className="text-4xl text-emerald-400/60 animate-pulse z-10">🏥</div>
                      </div>
                    )}
                    
                    {project.title === 'Real-Time Stress Monitoring System' && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Stress level indicator rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            {/* Outer stress ring */}
                            <div className="w-32 h-32 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
                            <div className="absolute inset-2 w-28 h-28 border-2 border-orange-400/50 rounded-full animate-pulse delay-300"></div>
                            <div className="absolute inset-4 w-24 h-24 border-2 border-red-400/70 rounded-full animate-pulse delay-600"></div>
                            
                            {/* Realistic face with stress expressions */}
                            <div className="absolute inset-8 w-16 h-20 border border-teal-400/60 rounded-2xl bg-slate-800/20">
                              {/* Face outline */}
                              <div className="w-full h-full relative">
                                {/* Stressed eyebrows (furrowed) */}
                                <div className="absolute top-2 left-2 w-3 h-0.5 bg-orange-400 rounded transform rotate-12 animate-pulse"></div>
                                <div className="absolute top-2 right-2 w-3 h-0.5 bg-orange-400 rounded transform -rotate-12 animate-pulse delay-100"></div>
                                
                                {/* Eyes (tired/strained) */}
                                <div className="absolute top-4 left-3 w-2 h-1 bg-red-400 rounded-full animate-blink-stress"></div>
                                <div className="absolute top-4 right-3 w-2 h-1 bg-red-400 rounded-full animate-blink-stress delay-200"></div>
                                
                                {/* Eye strain indicators */}
                                <div className="absolute top-3.5 left-2.5 w-3 h-2 border border-red-300/50 rounded animate-pulse delay-300"></div>
                                <div className="absolute top-3.5 right-2.5 w-3 h-2 border border-red-300/50 rounded animate-pulse delay-400"></div>
                                
                                {/* Nose (flared) */}
                                <div className="absolute top-6 left-1/2 w-1 h-2 bg-teal-300 rounded transform -translate-x-1/2 animate-pulse delay-200"></div>
                                
                                {/* Mouth expressions (cycling between stress levels) */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                  {/* Neutral to frown transition */}
                                  <div className="w-4 h-1 bg-yellow-400 rounded-full animate-stress-mouth"></div>
                                  {/* Tension lines around mouth */}
                                  <div className="absolute -top-1 -left-1 w-6 h-3 border border-yellow-300/30 rounded-full animate-pulse delay-500"></div>
                                </div>
                                
                                {/* Facial tension points */}
                                <div className="absolute top-5 left-1 w-1 h-1 bg-red-400/60 rounded-full animate-pulse delay-600"></div>
                                <div className="absolute top-5 right-1 w-1 h-1 bg-red-400/60 rounded-full animate-pulse delay-700"></div>
                                <div className="absolute top-8 left-1 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse delay-800"></div>
                                <div className="absolute top-8 right-1 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse delay-900"></div>
                              </div>
                              
                              {/* Scanning lines */}
                              <div className="absolute top-0 left-0 w-full h-0.5 bg-teal-400/80 animate-scan-vertical"></div>
                              <div className="absolute top-0 left-0 w-0.5 h-full bg-teal-400/80 animate-scan-horizontal delay-1000"></div>
                            </div>
                            
                            {/* Stress level bars with labels */}
                            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 space-y-1">
                              <div className="flex items-center space-x-1">
                                <div className="w-6 h-1 bg-green-400 rounded animate-pulse"></div>
                                <span className="text-xs text-green-400 font-mono">LOW</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="w-5 h-1 bg-yellow-400 rounded animate-pulse delay-200"></div>
                                <span className="text-xs text-yellow-400 font-mono">MED</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="w-7 h-1 bg-orange-400 rounded animate-pulse delay-400"></div>
                                <span className="text-xs text-orange-400 font-mono">HIGH</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="w-4 h-1 bg-red-400 rounded animate-pulse delay-600"></div>
                                <span className="text-xs text-red-400 font-mono">CRIT</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Stress metrics dashboard */}
                        <div className="absolute bottom-2 left-2 space-y-1">
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="text-teal-400 font-mono">HR:</span>
                            <div className="flex space-x-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i}
                                  className="w-1 bg-red-400 rounded animate-heartbeat"
                                  style={{
                                    height: `${8 + Math.sin(i * 0.5) * 4}px`,
                                    animationDelay: `${i * 100}ms`
                                  }}
                                ></div>
                              ))}
                            </div>
                            <span className="text-red-400 font-mono">92</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="text-teal-400 font-mono">GSR:</span>
                            <div className="w-8 h-1 bg-orange-400 rounded animate-pulse"></div>
                            <span className="text-orange-400 font-mono">7.2</span>
                          </div>
                        </div>
                        
                        {/* Expression label */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                          <span className="text-xs text-orange-400 font-mono animate-pulse">ANALYZING EXPRESSION...</span>
                        </div>
                      </div>
                    )}
                    
                    {project.title === 'Cybersecurity Threat Intelligence Database' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900/30 to-black/50">
                        {/* Matrix-style background */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute text-green-400/30 font-mono text-xs animate-matrix-fall"
                              style={{
                                left: `${i * 15 + 5}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i * 0.5}s`
                              }}
                            >
                              01100101<br/>11010010<br/>00110110<br/>10101011
                            </div>
                          ))}
                        </div>
                        
                        {/* Central terminal/shield */}
                        <div className="relative z-10">
                          <div className="w-24 h-20 bg-black/80 border border-red-400 rounded-lg relative overflow-hidden">
                            {/* Terminal lines */}
                            <div className="absolute inset-2 space-y-1">
                              <div className="w-full h-0.5 bg-green-400 animate-pulse"></div>
                              <div className="w-3/4 h-0.5 bg-red-400 animate-pulse delay-200"></div>
                              <div className="w-1/2 h-0.5 bg-yellow-400 animate-pulse delay-400"></div>
                              <div className="w-full h-0.5 bg-green-400 animate-pulse delay-600"></div>
                            </div>
                            
                            {/* Scanning effect */}
                            <div className="absolute inset-0 bg-red-400/20 animate-security-scan"></div>
                            
                            {/* Skull and crossbones (hacker symbol) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-lg text-red-400 animate-pulse">☠️</div>
                            </div>
                          </div>
                          
                          {/* Threat indicators */}
                          <div className="absolute -top-2 -right-2 space-y-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping delay-300"></div>
                          </div>
                          
                          {/* Warning labels */}
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="text-xs text-red-400 font-mono animate-pulse">THREAT DETECTED</span>
                          </div>
                        </div>
                        
                        {/* Side panels */}
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 space-y-2">
                          <div className="w-8 h-1 bg-red-400 animate-pulse"></div>
                          <div className="w-6 h-1 bg-orange-400 animate-pulse delay-200"></div>
                          <div className="w-4 h-1 bg-yellow-400 animate-pulse delay-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {project.title === 'Blockchain Supply Chain Tracking Platform' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                        {/* Analytics Dashboard Layout */}
                        <div className="w-full h-full p-4 relative">
                          {/* Chart containers */}
                          <div className="grid grid-cols-2 gap-2 h-full">
                            {/* Top left - Line chart */}
                            <div className="bg-blue-900/20 border border-blue-400/30 rounded p-2">
                              <div className="w-full h-full relative">
                                <svg className="w-full h-full" viewBox="0 0 100 50">
                                  <path d="M5 40 L20 30 L35 35 L50 20 L65 25 L80 15 L95 10" 
                                        fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" 
                                        className="animate-draw-chart"/>
                                  <circle cx="95" cy="10" r="1.5" fill="rgb(59, 130, 246)" className="animate-ping"/>
                                </svg>
                              </div>
                            </div>
                            
                            {/* Top right - Bar chart */}
                            <div className="bg-blue-900/20 border border-blue-400/30 rounded p-2">
                              <div className="flex items-end justify-around h-full space-x-1">
                                {[60, 80, 45, 90, 70].map((height, i) => (
                                  <div key={i} className="bg-blue-400 rounded-t animate-grow-bar" 
                                       style={{
                                         width: '12%',
                                         height: `${height}%`,
                                         animationDelay: `${i * 200}ms`
                                       }}></div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Bottom left - Blockchain flow */}
                            <div className="bg-blue-900/20 border border-blue-400/30 rounded p-2 flex items-center justify-center">
                              <div className="flex items-center space-x-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="relative">
                                    <div className="w-4 h-4 bg-blue-400/40 border border-blue-400 rounded animate-pulse" 
                                         style={{animationDelay: `${i * 300}ms`}}>
                                      <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded"></div>
                                    </div>
                                    {i < 2 && <div className="absolute top-1/2 -right-0.5 w-1 h-0.5 bg-blue-400 animate-pulse" 
                                                   style={{animationDelay: `${i * 300 + 150}ms`}}></div>}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Bottom right - Metrics */}
                            <div className="bg-blue-900/20 border border-blue-400/30 rounded p-2">
                              <div className="space-y-1 text-xs font-mono">
                                <div className="text-blue-400">BLOCKS: <span className="text-blue-300 animate-pulse">1,247</span></div>
                                <div className="text-blue-400">TXN: <span className="text-green-400 animate-pulse">89.2K</span></div>
                                <div className="text-blue-400">NODES: <span className="text-purple-400 animate-pulse">156</span></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Central analytics icon */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-2xl text-blue-400/40 animate-pulse">📊</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {project.title === 'Emotion Detection Using Voice Recognition' && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Sound waves */}
                        <div className="flex items-center space-x-1">
                          {[...Array(7)].map((_, i) => (
                            <div 
                              key={i}
                              className="bg-purple-400 rounded-full animate-sound-wave"
                              style={{
                                width: '4px',
                                height: `${20 + Math.sin(i) * 15}px`,
                                animationDelay: `${i * 100}ms`
                              }}
                            ></div>
                          ))}
                        </div>
                        <div className="text-6xl text-purple-400 opacity-80 ml-4 animate-pulse">🎙</div>
                      </div>
                    )}
                    
                    {project.title === 'Rent-A-Tech' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                        {/* Electronic circuit board background */}
                        <div className="absolute inset-0">
                          {/* Circuit traces */}
                          <svg className="w-full h-full opacity-30" viewBox="0 0 200 120">
                            <path d="M20 20 L50 20 L50 50 L80 50 L80 80 L120 80" stroke="rgb(34, 211, 238)" strokeWidth="1" fill="none" className="animate-pulse"/>
                            <path d="M180 20 L150 20 L150 40 L120 40 L120 70 L80 70" stroke="rgb(34, 211, 238)" strokeWidth="1" fill="none" className="animate-pulse delay-300"/>
                            <path d="M20 100 L60 100 L60 60 L100 60 L100 30 L140 30" stroke="rgb(34, 211, 238)" strokeWidth="1" fill="none" className="animate-pulse delay-600"/>
                          </svg>
                        </div>
                        
                        {/* Electronic components grid */}
                        <div className="relative z-10 grid grid-cols-3 gap-4 w-32">
                          {/* Camera */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float">
                            <div className="text-lg">📷</div>
                          </div>
                          
                          {/* Projector */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float delay-200">
                            <div className="text-lg">📽️</div>
                          </div>
                          
                          {/* Microphone */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float delay-400">
                            <div className="text-lg">🎤</div>
                          </div>
                          
                          {/* Headphones */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float delay-600">
                            <div className="text-lg">🎧</div>
                          </div>
                          
                          {/* Laptop */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float delay-800">
                            <div className="text-lg">💻</div>
                          </div>
                          
                          {/* Speaker */}
                          <div className="bg-gray-800/50 border border-cyan-400 rounded p-2 flex items-center justify-center animate-float delay-1000">
                            <div className="text-lg">🔊</div>
                          </div>
                        </div>
                        
                        {/* Availability indicators */}
                        <div className="absolute top-2 right-2 space-y-1">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400 font-mono">AVAILABLE</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                            <span className="text-xs text-orange-400 font-mono">RENTED</span>
                          </div>
                        </div>
                        
                        {/* Power indicator */}
                        <div className="absolute bottom-2 left-2">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                            <span className="text-xs text-cyan-400 font-mono">ONLINE</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                    <div className="text-white">
                      <div className="flex gap-3">
                        <button 
                          onClick={() => openProjectDetails(project)}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                        >
                          View More
                        </button>
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} space-y-6`}>
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags?.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className={`px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium hover-lift ${
                        hoveredProject === index ? 'animate-bounce-in' : ''
                      }`}
                      style={{animationDelay: `${tagIndex * 100}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-medium hover-lift hover-glow transition-all duration-300"
                  >
                    <span>View More</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-medium hover:bg-emerald-600 hover:text-white hover-lift transition-all duration-300"
                    >
                      <span>View Code</span>
                      <svg className="ml-2 w-4 h-4 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-bounce-in delay-1000">
          <div className="glass rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative design.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover-lift hover-glow transition-all duration-300"
            >
              Let's Talk
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Function to generate detailed project HTML page
function generateProjectDetailsHTML(project) {
  const getProjectFeatures = (proj) => {
    const features = {
      'Health Monitoring System': [
        { icon: '📊', title: 'Real-time ECG Analysis', description: 'Continuous monitoring of heart rhythm with advanced signal processing algorithms for accurate cardiovascular assessment.' },
        { icon: '🤖', title: 'ML Disease Prediction', description: 'Machine learning models trained on medical datasets to identify potential cardiovascular conditions early.' },
        { icon: '📱', title: 'Mobile Interface', description: 'User-friendly mobile application designed for healthcare professionals and patients with intuitive controls.' },
        { icon: '⚡', title: 'Low Latency Processing', description: 'Real-time data processing with minimal delay ensuring critical health monitoring without interruption.' },
        { icon: '🔒', title: 'HIPAA Compliance', description: 'Secure data handling following strict healthcare privacy regulations and industry standards.' },
        { icon: '📈', title: 'Historical Trends', description: 'Comprehensive long-term health data analysis with trend visualization and predictive insights.' }
      ],
      'Real-Time Stress Monitoring System': [
        { icon: '👁️', title: 'Facial Expression Analysis', description: 'Advanced computer vision algorithms detect micro-expressions and facial patterns indicating stress levels.' },
        { icon: '🎤', title: 'Voice Emotion Detection', description: 'Sophisticated audio processing analyzes vocal stress patterns, tone changes, and emotional states.' },
        { icon: '📊', title: 'Multi-modal Analysis', description: 'Combines facial and vocal data with physiological signals for comprehensive stress assessment.' },
        { icon: '⚡', title: 'Real-time Processing', description: 'Live analysis with immediate feedback, alerts, and recommendations for stress management.' },
        { icon: '📱', title: 'Web Application', description: 'Interactive Streamlit interface providing easy access, monitoring dashboards, and user controls.' },
        { icon: '🧠', title: 'Deep Learning Models', description: 'Neural networks trained on diverse emotional datasets ensuring accurate emotion recognition across demographics.' }
      ],
      'Cybersecurity Threat Intelligence Database': [
        { icon: '🔍', title: 'Threat Detection', description: 'Advanced algorithms scan and identify potential security threats in real-time across network infrastructure.' },
        { icon: '📊', title: 'Risk Analytics', description: 'Comprehensive risk assessment and prioritization system for efficient threat management and response.' },
        { icon: '🚨', title: 'Alert System', description: 'Intelligent notification system provides immediate alerts for critical security incidents and anomalies.' },
        { icon: '📈', title: 'Trend Analysis', description: 'Historical threat data analysis revealing patterns and predicting future security challenges.' },
        { icon: '🛡️', title: 'Prevention Tools', description: 'Proactive security measures and automated response systems to prevent and mitigate cyber attacks.' },
        { icon: '🔗', title: 'API Integration', description: 'Seamless integration with existing security infrastructure and third-party threat intelligence feeds.' }
      ],
      'Blockchain Supply Chain Tracking Platform': [
        { icon: '⛓️', title: 'Immutable Records', description: 'Blockchain technology ensures tamper-proof tracking of products throughout the entire supply chain journey.' },
        { icon: '📊', title: 'Analytics Dashboard', description: 'Comprehensive visualization of supply chain metrics, performance indicators, and predictive analytics.' },
        { icon: '🔍', title: 'Product Traceability', description: 'End-to-end product tracking from origin to consumer with complete transparency and verification.' },
        { icon: '🤖', title: 'Smart Contracts', description: 'Automated contract execution and compliance monitoring reducing manual oversight and errors.' },
        { icon: '📱', title: 'Mobile Access', description: 'Mobile application for stakeholders to access real-time supply chain information and updates.' },
        { icon: '🔒', title: 'Secure Transactions', description: 'Cryptographically secure transactions ensuring data integrity and preventing unauthorized access.' }
      ],
      'Emotion Detection Using Voice Recognition': [
        { icon: '🎙️', title: 'Voice Analysis', description: 'Advanced audio feature extraction analyzing pitch, tone, rhythm, and spectral characteristics for emotion detection.' },
        { icon: '🧠', title: 'Deep Learning', description: 'State-of-the-art neural networks trained on diverse voice datasets for accurate emotion classification.' },
        { icon: '⚡', title: 'Real-time Processing', description: 'Live audio processing with immediate emotion recognition and response for interactive applications.' },
        { icon: '📊', title: 'Visualization', description: 'Interactive Streamlit interface displaying emotion probabilities, confidence scores, and temporal analysis.' },
        { icon: '🔧', title: 'Feature Engineering', description: 'Sophisticated audio preprocessing including noise reduction, normalization, and feature extraction.' },
        { icon: '📈', title: 'Model Performance', description: 'High accuracy emotion classification with continuous learning and model improvement capabilities.' }
      ],
      'Rent-A-Tech': [
        { icon: '💻', title: 'Equipment Management', description: 'Comprehensive catalog of technology equipment with availability tracking, specifications, and rental history.' },
        { icon: '📅', title: 'Booking System', description: 'Advanced reservation system with calendar integration, conflict detection, and automated scheduling.' },
        { icon: '💳', title: 'Payment Processing', description: 'Secure payment gateway integration supporting multiple payment methods and automated billing.' },
        { icon: '📱', title: 'Mobile App', description: 'User-friendly mobile application for students to browse, book, and manage equipment rentals on-the-go.' },
        { icon: '🔔', title: 'Notifications', description: 'Real-time notifications for booking confirmations, reminders, and equipment availability updates.' },
        { icon: '📊', title: 'Analytics', description: 'Detailed analytics dashboard for rental patterns, popular equipment, and business intelligence insights.' }
      ]
    }
    
    return features[proj.title] || [
      { icon: '⚡', title: 'High Performance', description: 'Optimized architecture ensuring fast response times and efficient resource utilization.' },
      { icon: '🔒', title: 'Secure Design', description: 'Built with security best practices including encryption, authentication, and access control.' },
      { icon: '📱', title: 'Responsive Interface', description: 'Cross-platform compatibility ensuring seamless experience across all devices and screen sizes.' }
    ]
  }

  const getTechnicalDetails = (proj) => {
    const details = {
      'Health Monitoring System': [
        {
          title: 'Signal Processing Pipeline',
          content: 'Implemented comprehensive biomedical signal processing using Python and MATLAB. Applied advanced digital filters including Butterworth and Chebyshev filters for ECG signal enhancement. Utilized wavelet transforms for noise reduction and feature extraction from both ECG and GSR signals. Developed custom algorithms for R-peak detection and heart rate variability analysis.'
        },
        {
          title: 'Machine Learning Architecture',
          content: 'Designed ensemble learning system combining Random Forest, Support Vector Machine, and Neural Network classifiers. Implemented feature engineering pipeline extracting time-domain, frequency-domain, and non-linear features. Achieved 94% accuracy in preliminary disease detection using cross-validation on medical datasets. Integrated SMOTE for handling imbalanced datasets and improving model generalization.'
        },
        {
          title: 'Data Acquisition System',
          content: 'Integrated with commercial-grade ECG and GSR sensors for continuous physiological monitoring. Implemented real-time data streaming with optimized sampling rates (250Hz for ECG, 32Hz for GSR). Developed buffer management system for handling continuous data streams without loss. Created calibration protocols ensuring measurement accuracy and sensor reliability.'
        },
        {
          title: 'Validation & Clinical Testing',
          content: 'Conducted extensive validation using standard medical databases including MIT-BIH and FANTASIA. Performed clinical testing with healthcare professionals to validate system accuracy and usability. Implemented statistical analysis for performance metrics including sensitivity, specificity, and positive predictive value. Achieved regulatory compliance standards for medical device software.'
        }
      ],
      'Real-Time Stress Monitoring System': [
        {
          title: 'Computer Vision Implementation',
          content: 'Developed facial expression recognition using OpenCV and TensorFlow frameworks. Implemented facial landmark detection with 68-point facial geometry analysis. Created emotion classification model trained on FER2013 and custom datasets. Optimized real-time processing for webcam input with frame rate optimization and face tracking algorithms.'
        },
        {
          title: 'Audio Processing Engine',
          content: 'Built voice emotion recognition using Librosa for audio feature extraction. Implemented MFCC, spectral rolloff, and zero-crossing rate analysis for comprehensive audio characterization. Developed neural network architecture using LSTM layers for temporal emotion pattern recognition. Integrated PyAudio for real-time audio capture and processing.'
        },
        {
          title: 'Multi-Modal Fusion',
          content: 'Created fusion algorithm combining facial and vocal emotion probabilities using weighted ensemble methods. Implemented temporal smoothing for consistent emotion prediction across time windows. Developed confidence scoring system measuring prediction reliability. Created adaptive weighting based on input quality and environmental conditions.'
        },
        {
          title: 'Web Application Development',
          content: 'Built interactive Streamlit web application with real-time visualization dashboards. Implemented WebRTC for seamless webcam and microphone access across browsers. Created responsive UI components for emotion monitoring and historical analysis. Deployed using Docker containers for scalable cloud deployment.'
        }
      ]
    }
    
    return details[proj.title] || [
      {
        title: 'System Architecture',
        content: 'Designed scalable architecture using modern development frameworks and cloud infrastructure. Implemented microservices pattern for modularity and maintainability. Utilized containerization for consistent deployment across environments.'
      },
      {
        title: 'Implementation Details',
        content: 'Developed using industry-standard tools and frameworks with comprehensive testing coverage. Implemented continuous integration and deployment pipelines. Applied software engineering best practices including code reviews and documentation.'
      }
    ]
  }

  const features = getProjectFeatures(project)
  const technicalDetails = getTechnicalDetails(project)

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title} - Detailed Overview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 25%, #f0fdfa 50%, #cffafe 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .project-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            display: block;
        }
        
        .project-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #059669, #0d9488, #0891b2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .project-description {
            font-size: 1.2rem;
            color: #6b7280;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .tech-tag {
            padding: 0.5rem 1rem;
            background: linear-gradient(135deg, #d1fae5, #a7f3d0);
            color: #047857;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #059669, #0d9488);
            color: white;
        }
        
        .btn-secondary {
            background: transparent;
            color: #059669;
            border: 2px solid #059669;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
        
        .section {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #1f2937;
            text-align: center;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .feature-card {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            display: block;
        }
        
        .feature-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #1f2937;
        }
        
        .feature-description {
            color: #6b7280;
            line-height: 1.6;
        }
        
        .technical-detail {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            margin-bottom: 1.5rem;
            border-left: 4px solid #059669;
        }
        
        .technical-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
        }
        
        .technical-content {
            color: #6b7280;
            line-height: 1.7;
        }
        
        .back-button {
            position: fixed;
            top: 2rem;
            left: 2rem;
            z-index: 100;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .project-title {
                font-size: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .back-button {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 2rem;
            }
        }
    </style>
</head>
<body>
    <button class="btn btn-secondary back-button" onclick="window.close()">
        ← Back to Portfolio
    </button>
    
    <div class="container">
        <div class="header">
            <span class="project-icon">${project.icon}</span>
            <h1 class="project-title">${project.title}</h1>
            <p class="project-description">${project.description}</p>
            
            <div class="tech-stack">
                ${project.tags?.map(tag => `<span class="tech-tag">${tag}</span>`).join('') || ''}
            </div>
            
            <div class="action-buttons">
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-primary">Live Demo →</a>` : ''}
                ${project.repo ? `<a href="${project.repo}" target="_blank" class="btn btn-secondary">View Code →</a>` : ''}
            </div>
        </div>
        
        <div class="section">
            <h2 class="section-title">Key Features</h2>
            <div class="features-grid">
                ${features.map(feature => `
                    <div class="feature-card">
                        <span class="feature-icon">${feature.icon}</span>
                        <h3 class="feature-title">${feature.title}</h3>
                        <p class="feature-description">${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="section">
            <h2 class="section-title">Technical Implementation</h2>
            ${technicalDetails.map(detail => `
                <div class="technical-detail">
                    <h3 class="technical-title">${detail.title}</h3>
                    <p class="technical-content">${detail.content}</p>
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>
  `
}
