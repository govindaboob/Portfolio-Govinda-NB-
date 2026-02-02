import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const categories = [
  { name: 'All', filter: 'all' },
  { name: 'AI/ML', filter: 'ai-ml' },
  { name: 'Blockchain', filter: 'blockchain' },
  { name: 'Cybersecurity', filter: 'security' },
  { name: 'Healthcare', filter: 'healthcare' },
  { name: 'Web Platform', filter: 'web-platform' }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showProjectDetails, setShowProjectDetails] = useState(false)

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // Handle browser back button for project details
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.page === 'projects' || !event.state) {
        setShowProjectDetails(false)
        setSelectedProject(null)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Function to open project details
  const openProjectDetails = (project) => {
    const projectId = (project.id || project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''))
    const newState = { page: 'project', projectId: projectId }
    window.history.pushState(newState, `${project.title} - Portfolio`, `#project-${projectId}`)
    
    setSelectedProject(project)
    setShowProjectDetails(true)
  }

  // Function to close project details
  const closeProjectDetails = () => {
    window.history.pushState({ page: 'projects' }, 'Projects - Portfolio', '#projects')
    setShowProjectDetails(false)
    setSelectedProject(null)
  }

  // If showing project details, render the details view
  if (showProjectDetails && selectedProject) {
    return <ProjectDetailsView project={selectedProject} onClose={closeProjectDetails} />
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
              className="animate-fadeInUp grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
              style={{animationDelay: `${400 + index * 200}ms`}}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Demo */}
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative">
                    {/* Project-specific animated visuals */}
                    {project.title === 'Email Guard – Multi-Layer Phishing Detection System' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
                        {/* Background grid */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                          }}></div>
                        </div>

                        {/* Animated shield icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            {/* Pulsing rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-64 h-64 border-2 border-purple-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                              <div className="absolute w-48 h-48 border-2 border-cyan-500/30 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
                            </div>

                            {/* Central shield */}
                            <div className="relative z-10">
                              <svg className="w-32 h-32 animate-pulse" viewBox="0 0 24 24" fill="none">
                                <defs>
                                  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor: 'rgb(168, 85, 247)', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 1}} />
                                  </linearGradient>
                                </defs>
                                <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" fill="url(#shieldGradient)" opacity="0.2" />
                                <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" stroke="url(#shieldGradient)" strokeWidth="1.5" fill="none" />
                                <path d="M9 12l2 2 4-4" stroke="rgb(34, 197, 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <animate attributeName="stroke-dasharray" from="0 20" to="20 0" dur="1.5s" repeatCount="indefinite" />
                                </path>
                              </svg>
                            </div>

                            {/* Floating email icons */}
                            <div className="absolute -top-8 -left-8 animate-float" style={{animationDuration: '4s'}}>
                              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                                <span className="text-2xl">📧</span>
                              </div>
                            </div>
                            <div className="absolute -top-8 -right-8 animate-float" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-red-500/30">
                                <span className="text-2xl">⚠️</span>
                              </div>
                            </div>
                            <div className="absolute -bottom-8 left-0 animate-float" style={{animationDuration: '4.5s', animationDelay: '1s'}}>
                              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                                <span className="text-2xl">🔒</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Scanning effect */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan"></div>
                        </div>

                        {/* Text overlay */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                          <div className="bg-purple-900/50 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/30">
                            <span className="text-purple-300 font-bold text-sm">AI-Powered Phishing Detection</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {project.title === 'Health Monitoring System' && (
                      <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
                        {/* Monitor screen with scan lines */}
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-black to-emerald-950/50">
                          {/* Horizontal scan lines */}
                          <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(16, 185, 129) 2px, rgb(16, 185, 129) 3px)',
                          }}></div>
                        </div>
                        
                        {/* Continuous ECG Serial Plotter */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                          <div className="relative w-full h-full">
                            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" style={{stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.1}} />
                                  <stop offset="70%" style={{stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.8}} />
                                  <stop offset="100%" style={{stopColor: 'rgb(16, 185, 129)', stopOpacity: 1}} />
                                </linearGradient>
                                <filter id="glow">
                                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                  <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                  </feMerge>
                                </filter>
                              </defs>
                              
                              {/* Grid lines */}
                              <g className="opacity-10">
                                {[...Array(15)].map((_, i) => (
                                  <line key={`h${i}`} x1="0" y1={i * 20} x2="1200" y2={i * 20} stroke="rgb(16, 185, 129)" strokeWidth="0.5" />
                                ))}
                                {[...Array(24)].map((_, i) => (
                                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke="rgb(16, 185, 129)" strokeWidth="0.5" />
                                ))}
                              </g>
                              
                              {/* Baseline */}
                              <line x1="0" y1="150" x2="1200" y2="150" stroke="rgb(16, 185, 129)" strokeWidth="0.5" opacity="0.2" strokeDasharray="5,5"/>
                              
                              {/* Continuous scrolling waveform - extended for smooth loop */}
                              <path 
                                d="M-200 150 
                                   L-180 150 L-175 148 L-172 150 
                                   L-166 150 L-163 145 L-160 100 L-156 155 L-152 170 L-148 150
                                   L-133 150 L-130 152 L-126 148 L-122 150
                                   L-96 150
                                   
                                   L-71 150 L-66 148 L-63 150 
                                   L-57 150 L-54 145 L-51 100 L-47 155 L-43 170 L-39 150
                                   L-24 150 L-21 152 L-17 148 L-13 150
                                   L13 150
                                   
                                   L38 150 L43 148 L46 150 
                                   L52 150 L55 145 L58 100 L62 155 L66 170 L70 150
                                   L85 150 L88 152 L92 148 L96 150
                                   L122 150
                                   
                                   L147 150 L152 148 L155 150 
                                   L161 150 L164 145 L167 100 L171 155 L175 170 L179 150
                                   L194 150 L197 152 L201 148 L205 150
                                   L231 150
                                   
                                   L256 150 L261 148 L264 150 
                                   L270 150 L273 145 L276 100 L280 155 L284 170 L288 150
                                   L303 150 L306 152 L310 148 L314 150
                                   L340 150
                                   
                                   L365 150 L370 148 L373 150 
                                   L379 150 L382 145 L385 100 L389 155 L393 170 L397 150
                                   L412 150 L415 152 L419 148 L423 150
                                   L449 150
                                   
                                   L474 150 L479 148 L482 150 
                                   L488 150 L491 145 L494 100 L498 155 L502 170 L506 150
                                   L521 150 L524 152 L528 148 L532 150
                                   L558 150
                                   
                                   L583 150 L588 148 L591 150 
                                   L597 150 L600 145 L603 100 L607 155 L611 170 L615 150
                                   L630 150 L633 152 L637 148 L641 150
                                   L667 150
                                   
                                   L692 150 L697 148 L700 150 
                                   L706 150 L709 145 L712 100 L716 155 L720 170 L724 150
                                   L739 150 L742 152 L746 148 L750 150
                                   L776 150
                                   
                                   L801 150 L806 148 L809 150 
                                   L815 150 L818 145 L821 100 L825 155 L829 170 L833 150
                                   L848 150 L851 152 L855 148 L859 150
                                   L885 150
                                   
                                   L910 150 L915 148 L918 150 
                                   L924 150 L927 145 L930 100 L934 155 L938 170 L942 150
                                   L957 150 L960 152 L964 148 L968 150
                                   L994 150
                                   
                                   L1019 150 L1024 148 L1027 150 
                                   L1033 150 L1036 145 L1039 100 L1043 155 L1047 170 L1051 150
                                   L1066 150 L1069 152 L1073 148 L1077 150
                                   L1103 150
                                   
                                   L1128 150 L1133 148 L1136 150 
                                   L1142 150 L1145 145 L1148 100 L1152 155 L1156 170 L1160 150
                                   L1175 150 L1178 152 L1182 148 L1186 150
                                   L1212 150
                                   
                                   L1237 150 L1242 148 L1245 150 
                                   L1251 150 L1254 145 L1257 100 L1261 155 L1265 170 L1269 150
                                   L1284 150 L1287 152 L1291 148 L1295 150
                                   L1321 150
                                   
                                   L1346 150 L1351 148 L1354 150 
                                   L1360 150 L1363 145 L1366 100 L1370 155 L1374 170 L1378 150
                                   L1393 150 L1396 152 L1400 148 L1404 150
                                   L1430 150"
                                fill="none" 
                                stroke="url(#ecgGradient)" 
                                strokeWidth="2.5"
                                filter="url(#glow)"
                                className="animate-ecg-continuous"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Vital Signs Display - Organized in Bottom */}
                        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4 px-4">
                          {/* Heart Rate */}
                          <div className="bg-black/80 backdrop-blur-md border-2 border-red-500/60 rounded-xl px-4 py-2 min-w-[110px]">
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-2xl animate-pulse">❤️</div>
                              <div className="text-right">
                                <div className="text-[9px] text-red-400/80 font-mono uppercase tracking-wider">Heart Rate</div>
                                <div className="text-xl text-red-400 font-mono font-bold leading-tight">72</div>
                                <div className="text-[8px] text-red-300/60 font-mono">BPM</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* SpO2 */}
                          <div className="bg-black/80 backdrop-blur-md border-2 border-blue-500/60 rounded-xl px-4 py-2 min-w-[110px]">
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-2xl">🫁</div>
                              <div className="text-right">
                                <div className="text-[9px] text-blue-400/80 font-mono uppercase tracking-wider">SpO2</div>
                                <div className="text-xl text-blue-400 font-mono font-bold leading-tight">98</div>
                                <div className="text-[8px] text-blue-300/60 font-mono">%</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Temperature */}
                          <div className="bg-black/80 backdrop-blur-md border-2 border-orange-500/60 rounded-xl px-4 py-2 min-w-[110px]">
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-2xl">🌡️</div>
                              <div className="text-right">
                                <div className="text-[9px] text-orange-400/80 font-mono uppercase tracking-wider">Temp</div>
                                <div className="text-xl text-orange-400 font-mono font-bold leading-tight">98.2</div>
                                <div className="text-[8px] text-orange-300/60 font-mono">°F</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Status Indicator - Top Right */}
                        <div className="absolute top-3 right-3 flex items-center space-x-2 bg-black/80 backdrop-blur-md border border-emerald-500/60 rounded-lg px-3 py-1.5 shadow-lg">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full absolute"></div>
                          <span className="text-xs text-emerald-400 font-mono font-bold tracking-wider">LIVE</span>
                        </div>
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
                      <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
                        {/* Dark gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-purple-950/50"></div>
                        
                        {/* Animated grid background */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>
                        
                        {/* Blockchain chain visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Connected blocks forming a chain */}
                          <div className="flex items-center space-x-3 px-4">
                            {[...Array(4)].map((_, blockIndex) => (
                              <div key={blockIndex} className="relative">
                                {/* Block container */}
                                <div 
                                  className="relative bg-gradient-to-br from-blue-900/80 to-purple-900/80 border-2 border-blue-400 rounded-lg p-3 w-20 h-20 animate-pulse-slow backdrop-blur-sm"
                                  style={{animationDelay: `${blockIndex * 400}ms`}}
                                >
                                  {/* Block icon */}
                                  <div className="absolute top-1 right-1 text-[10px]">🔗</div>
                                  
                                  {/* Hash visualization */}
                                  <div className="space-y-1 mt-2">
                                    <div className="w-full h-1 bg-blue-400/60 rounded animate-pulse" style={{animationDelay: `${blockIndex * 100}ms`}}></div>
                                    <div className="w-4/5 h-1 bg-blue-300/50 rounded animate-pulse" style={{animationDelay: `${blockIndex * 100 + 50}ms`}}></div>
                                    <div className="w-3/5 h-1 bg-purple-400/60 rounded animate-pulse" style={{animationDelay: `${blockIndex * 100 + 100}ms`}}></div>
                                  </div>
                                  
                                  {/* Block number */}
                                  <div className="absolute bottom-1 left-1 text-[9px] text-blue-400 font-mono">
                                    #{blockIndex + 1}
                                  </div>
                                  
                                  {/* Verification checkmark */}
                                  <div className="absolute bottom-1 right-1 text-[10px] text-green-400 animate-bounce-in" style={{animationDelay: `${blockIndex * 400 + 800}ms`}}>
                                    ✓
                                  </div>
                                  
                                  {/* Glowing corners */}
                                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: `${blockIndex * 400}ms`}}></div>
                                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: `${blockIndex * 400 + 200}ms`}}></div>
                                </div>
                                
                                {/* Connecting chain link */}
                                {blockIndex < 3 && (
                                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 flex items-center z-20">
                                    {/* Animated data flow particles */}
                                    <div className="relative w-6 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                                      <div className="absolute top-0 left-0 w-1 h-full bg-white animate-flow-particle" style={{animationDelay: `${blockIndex * 400}ms`}}></div>
                                    </div>
                                    {/* Chain link symbol */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8px] text-cyan-400 animate-pulse">
                                      ⛓️
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Top info bar - Network stats */}
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
                              <span className="text-green-400">NETWORK ACTIVE</span>
                            </div>
                            <div className="text-blue-400">
                              HEIGHT: <span className="text-white animate-pulse">482,156</span>
                            </div>
                          </div>
                          <div className="text-cyan-400">
                            TXN/s: <span className="text-white animate-pulse">1,247</span>
                          </div>
                        </div>
                        
                        {/* Bottom info bar - Transaction details */}
                        <div className="absolute bottom-2 left-2 right-2 bg-black/80 border border-blue-500/40 rounded p-2">
                          <div className="space-y-1 text-[8px] font-mono">
                            <div className="flex items-center justify-between">
                              <span className="text-blue-400">Latest Block:</span>
                              <span className="text-cyan-400 animate-pulse">0x7f3a...9d2c</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-purple-400">Gas Price:</span>
                              <span className="text-white">23 Gwei</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-green-400">Status:</span>
                              <div className="flex-1 h-1 bg-gray-800 rounded overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 animate-progress"></div>
                              </div>
                              <span className="text-green-400">VERIFIED</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating transaction indicators */}
                        <div className="absolute top-8 right-4 space-y-1">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="flex items-center space-x-1 animate-slide-left"
                              style={{animationDelay: `${i * 600}ms`}}
                            >
                              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                              <span className="text-[8px] text-cyan-400 font-mono">TXN</span>
                            </div>
                          ))}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
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
            <p className="font-body text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
              <span className="text-lg">💬</span>
              Let's talk on WhatsApp - Quick and easy!
            </p>
            <a 
              href="https://wa.me/919561404646?text=Hi%20Govinda!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20collaborate!" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Let's Talk on WhatsApp
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Project Details View Component  
function ProjectDetailsView({ project, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Get project-specific features
  const getProjectFeatures = () => {
    const featuresMap = {
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
        { icon: '🔍', title: 'Smart Search', description: 'Advanced filtering system allowing users to find specific equipment by category, specifications, and availability.' },
        { icon: '📅', title: 'Booking System', description: 'Intuitive reservation system with real-time availability checking and automated confirmation processes.' },
        { icon: '💳', title: 'Payment Integration', description: 'Secure payment processing supporting multiple payment methods with fraud prevention and transaction security.' },
        { icon: '👤', title: 'User Management', description: 'Comprehensive user profiles with rental history, preferences, and personalized recommendations for equipment.' },
        { icon: '💻', title: 'Equipment Management', description: 'Comprehensive catalog of technology equipment with availability tracking, specifications, and rental history.' },
        { icon: '📊', title: 'Analytics', description: 'Detailed analytics dashboard for rental patterns, popular equipment, and business intelligence insights.' }
      ]
    }
    return featuresMap[project.title] || [
      { icon: '⚡', title: 'High Performance', description: 'Optimized architecture ensuring fast response times and efficient resource utilization.' },
      { icon: '🔒', title: 'Secure Design', description: 'Built with security best practices including encryption, authentication, and access control.' },
      { icon: '📱', title: 'Responsive Interface', description: 'Cross-platform compatibility ensuring seamless experience across all devices and screen sizes.' }
    ]
  }

  const features = getProjectFeatures()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Sticky Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={onClose}
            className="group inline-flex items-center px-6 py-3 text-gray-700 hover:text-white bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-300 font-semibold shadow-md hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>

      {/* Project Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="inline-block mb-6">
            <div className="text-8xl animate-bounce-in filter drop-shadow-2xl">{project.icon}</div>
            <div className="mt-4 flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-200"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping delay-400"></div>
            </div>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {project.title}
          </h1>
          
          <p className="font-body text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack Pills */}
          {project.tags && (
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fadeInUp delay-200">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="group px-5 py-2.5 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 border-2 border-gray-200 hover:border-transparent text-gray-700 hover:text-white rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl cursor-default"
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          

        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fadeInUp delay-400">
          {[
            { icon: '⚡', label: 'Performance', value: 'Optimized' },
            { icon: '🔒', label: 'Security', value: 'Enterprise' },
            { icon: '📱', label: 'Responsive', value: '100%' },
            { icon: '🚀', label: 'Deployment', value: 'Cloud' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-sm text-gray-600 font-medium mb-1">{stat.label}</div>
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="mb-20 animate-fadeInUp delay-500">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ✨ Key Features & Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the powerful features that make this project stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-400 relative overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="mb-20 animate-fadeInUp delay-600">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-10 sm:p-12 border border-blue-200 shadow-xl">
            <div className="flex items-start space-x-6 mb-8">
              <div className="text-6xl">📋</div>
              <div className="flex-1">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
                  This project represents a comprehensive solution designed to address real-world challenges through innovative technology and thoughtful implementation. 
                  Built with scalability, performance, and user experience at its core, it demonstrates expertise in modern development practices and cutting-edge technologies.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900">Project Goals</h3>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Deliver a robust, scalable solution that addresses user needs with precision, ensuring high performance, 
                  security, and an exceptional user experience across all touchpoints.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">💡</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900">Innovation</h3>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Leveraging modern frameworks, cloud technologies, and best practices to create a future-proof solution 
                  that adapts to evolving requirements and technological advancements.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">🚀</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900">Impact</h3>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Designed to make a measurable difference by improving efficiency, reducing complexity, and providing 
                  actionable insights that drive better decision-making and outcomes.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">🔒</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900">Security & Quality</h3>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Built with enterprise-grade security practices, comprehensive testing, and continuous monitoring to 
                  ensure reliability, data protection, and compliance with industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp delay-700">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 text-white shadow-2xl overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-white"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6 animate-bounce">🎯</div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Impressed by This Project?
              </h3>
              <p className="font-body text-xl mb-6 opacity-95 max-w-2xl mx-auto">
                Let's collaborate and create something amazing together. I'm always excited to work on innovative projects!
              </p>
              <p className="font-body text-base text-white/80 mb-8 flex items-center justify-center gap-2">
                <span className="text-xl">💬</span>
                Let's talk on WhatsApp for quick response!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={onClose}
                  className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  View More Projects
                </button>
                <a
                  href={`https://wa.me/919561404646?text=Hi%20Govinda!%20I'm%20really%20impressed%20by%20your%20${encodeURIComponent(project.title)}%20project%20and%20would%20love%20to%20discuss%20a%20collaboration%20opportunity!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <button class="btn btn-secondary back-button" onclick="
        // Mark that we're going back to projects
        sessionStorage.setItem('fromProjectDetails', 'true');
        // Go back to main page
        window.location.href = window.location.origin + window.location.pathname + '#projects';
    ">
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
