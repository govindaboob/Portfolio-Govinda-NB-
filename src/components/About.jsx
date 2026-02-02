import React from 'react'
import experiences from '../data/experience'
import cv from '../data/cv'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    color: "from-blue-400 to-cyan-500",
    skills: ["C", "C++", "Python"]
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "from-purple-400 to-pink-500",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Node.js", "REST API Development"]
  },
  {
    title: "Databases",
    icon: "🗄",
    color: "from-green-400 to-emerald-500",
    skills: ["PostgreSQL", "MySQL", "NoSQL Databases"]
  },
  {
    title: "Machine Learning & AI",
    icon: "🤖",
    color: "from-orange-400 to-red-500",
    skills: ["TensorFlow", "PyTorch", "OpenCV (Computer Vision)", "Speech & Audio Processing (Librosa, SpeechRecognition)"]
  },
  {
    title: "Tools & Frameworks",
    icon: "🛠",
    color: "from-indigo-400 to-purple-500",
    skills: ["Streamlit (ML UI Development)", "WebRTC (Real-time Streaming)", "API Integration & Backend Services"]
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    color: "from-emerald-400 to-teal-500",
    skills: ["Operating Systems", "Computer Networks", "Database Management","DSA"]
  }
]

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-morphing"></div>
      </div>
      
      {/* Floating Elements - Repositioned to avoid sports section */}
      <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-sparkle opacity-70"></div>
      <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-sparkle delay-700 opacity-60"></div>
      <div className="absolute top-1/8 right-1/5 w-1 h-1 bg-pink-400/50 rounded-full animate-sparkle delay-1000 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 pt-24">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-rainbow animate-gradient">About Me</span>
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center py-8 px-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-2xl">
              <div className="text-4xl text-gold-400 mb-4">〝</div>
              <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide leading-relaxed">
                Code enthusiast who loves connecting with people and learning from every conversation
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-300/30"></div>
                <div className="w-2 h-2 rounded-full bg-purple-300/40"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-300/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Personal Introduction */}
          <div className="animate-slideInUp">
            <div className="space-y-6">
              {/* Header Section */}
              <div className="text-center">
                <h3 className="font-display text-4xl font-bold mb-4 text-cyan-300">
                  🎓 Student & Innovator
                </h3>
              </div>
              
              {/* Main Info Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
                {/* Education */}
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <h4 className="font-display text-lg font-bold text-purple-300 mb-2">Education</h4>
                    <p className="text-white font-semibold text-sm mb-1">Computer Science</p>
                    <p className="text-purple-200 text-sm">RV College of Engineering</p>
                  </div>
                </div>

                {/* AI Focus */}
                <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🤖</div>
                    <h4 className="font-display text-lg font-bold text-cyan-300 mb-2">AI & ML</h4>
                    <p className="text-cyan-200 text-sm">Artificial Intelligence</p>
                    <p className="text-cyan-200 text-sm">Machine Learning</p>
                  </div>
                </div>

                {/* Development */}
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-display text-lg font-bold text-green-300 mb-2">Development</h4>
                    <p className="text-green-200 text-sm">End-to-end Apps</p>
                    <p className="text-green-200 text-sm">Real-time Systems</p>
                  </div>
                </div>

                {/* Sports */}
                <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏒</div>
                    <h4 className="font-display text-lg font-bold text-orange-300 mb-2">Sports</h4>
                    <p className="text-orange-200 text-sm">State-level</p>
                    <p className="text-orange-200 text-sm">Hockey Player</p>
                  </div>
                </div>
              </div>

              {/* Skills Showcase */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="text-center mb-6">
                  <h4 className="font-display text-2xl font-bold text-white mb-3">What I Bring Together</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-400/30 text-sm font-semibold">ML Models</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-400/30 text-sm font-semibold">APIs</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-400/30 text-sm font-semibold">Web Interfaces</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-400/30 text-sm font-semibold">Real-time Data</span>
                    <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-400/30 text-sm font-semibold">Intelligent Systems</span>
                  </div>
                </div>
                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-0">
                  Combining technical expertise with leadership skills from sports to build meaningful solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="animate-fadeInUp delay-300">
            <div className="text-center mb-8">
              <h3 className="font-display text-4xl font-bold mb-4 text-purple-300">
                🚀 Areas of Expertise
              </h3>
              <p className="text-xl text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text max-w-4xl mx-auto font-medium tracking-wide leading-relaxed">
                Passionate technology explorer with hands-on experience transforming raw data into meaningful insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="glass-dark rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h4 className="font-heading text-lg font-bold text-cyan-300 mb-2">Artificial Intelligence & Machine Learning</h4>
                <p className="text-gray-200 text-sm font-medium tracking-wide">Advanced AI/ML model development and deployment</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h4 className="font-heading text-lg font-bold text-purple-300 mb-2">Full-Stack Web Development</h4>
                <p className="text-gray-200 text-sm font-medium tracking-wide">Complete web application development lifecycle</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h4 className="font-heading text-lg font-bold text-pink-300 mb-2">Real-Time Systems</h4>
                <p className="text-gray-200 text-sm font-medium tracking-wide">Live data processing and streaming systems</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                <h4 className="font-heading text-lg font-bold text-green-300 mb-2">Intelligent Data Processing</h4>
                <p className="text-gray-200 text-sm font-medium tracking-wide">Smart data analysis and insights generation</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6 hover-lift hover-glow transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h4 className="font-heading text-lg font-bold text-orange-300 mb-2">Secure Software Design</h4>
                <p className="text-gray-200 text-sm font-medium tracking-wide">Building robust and secure applications</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slideInUp delay-500">
            <div className="text-center mb-8">
              <h3 className="font-display text-4xl font-bold mb-4 text-pink-300">
                🔹 Technical Skills
              </h3>
              <p className="text-xl text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text font-semibold tracking-wide">
                Comprehensive toolkit for building intelligent applications
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="glass-dark rounded-xl p-8 hover-lift hover-glow transition-all duration-300 group border border-white/10"
                  style={{animationDelay: `${600 + index * 150}ms`}}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                    <h4 className={`font-display text-xl lg:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent tracking-wide`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-200 flex-shrink-0`}></div>
                        <span className="text-gray-100 group-hover:text-white transition-colors duration-200 font-heading text-base font-medium tracking-wide leading-relaxed">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="scroll-mt-24 relative py-12">
            
            <div className="relative">
              {/* Header with decorative line */}
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h3 className="font-display text-5xl md:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text">
                    💼 Professional Experience
                  </h3>
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                </div>
                <p className="text-xl text-gray-300 font-medium tracking-wide mt-4">
                  My journey in technology and cybersecurity
                </p>
              </div>

              <div className="relative max-w-5xl mx-auto">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative mb-16">
                    
                    {/* Experience Card */}
                    <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl p-8 md:p-10 border-2 border-gray-700/50 hover:border-purple-500/70 transition-colors duration-300 shadow-2xl hover:shadow-purple-500/20 group">
                      
                      {/* Header Section */}
                      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                          <div className="text-6xl p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            {exp.icon}
                          </div>
                          <div>
                            <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text mb-2 group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                              {exp.role}
                            </h4>
                            <div className="text-xl font-semibold text-purple-400 mb-1">
                              {exp.company}
                            </div>
                            {exp.department && (
                              <div className="text-md text-cyan-400 font-medium flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                {exp.department}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-sm font-bold text-purple-300 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-500/40 backdrop-blur-sm">
                            📅 {exp.duration}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            📍 {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description with icon */}
                      <div className="mb-8 p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
                        <p className="text-gray-200 text-lg leading-relaxed font-medium">
                          {exp.description}
                        </p>
                      </div>

                      {/* Grid Layout for Better Organization */}
                      <div className="grid lg:grid-cols-2 gap-6 mb-8">
                        {/* Key Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl p-6 border border-yellow-500/20">
                            <h5 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                              <span className="text-2xl">🌟</span>
                              Key Achievements
                            </h5>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-200 flex items-start gap-3 hover:translate-x-1 transition-transform">
                                  <span className="text-yellow-400 text-xl mt-0.5 flex-shrink-0">✓</span>
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Project Highlight */}
                        {exp.project && (
                          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all">
                            <h5 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                              <span className="text-2xl">💡</span>
                              Featured Project
                            </h5>
                            <h6 className="text-lg font-semibold text-pink-300 mb-3">{exp.project.name}</h6>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                              {exp.project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-3 py-1.5 bg-purple-500/30 text-purple-200 rounded-full border border-purple-400/40 font-semibold hover:bg-purple-500/40 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Technologies Section - Full Width */}
                      <div className="mb-8 p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl border border-cyan-500/20">
                        <h5 className="text-lg font-bold text-cyan-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                          <span className="text-xl">🛠️</span>
                          Technologies & Tools
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-sm px-5 py-2.5 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 text-cyan-200 rounded-xl border border-cyan-500/40 hover:border-cyan-400/60 hover:scale-105 transition-all font-semibold shadow-lg hover:shadow-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate Section - Ornate Frame */}
                      {exp.certificate && (
                        <div className="pt-8 border-t-2 border-gradient-to-r from-transparent via-gray-700 to-transparent">
                          <h5 className="text-2xl font-bold text-center text-transparent bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text mb-6 flex items-center justify-center gap-3">
                            <span className="text-3xl">🏅</span>
                            Internship Certificate
                            <span className="text-3xl">🏅</span>
                          </h5>
                          <div className="max-w-2xl mx-auto">
                            <div className="relative group/cert cursor-pointer p-6 hover:scale-[1.01] transition-transform duration-500" onClick={() => window.open(exp.certificate, '_blank')}>
                              {/* Outer border lines */}
                              <div className="absolute inset-3 border-2 border-yellow-500/60 rounded-sm group-hover/cert:border-yellow-400/80 transition-colors"></div>
                              <div className="absolute inset-5 border border-yellow-400/40 group-hover/cert:border-yellow-300/60 transition-colors"></div>
                              
                              {/* Decorative corner ornaments - Top Left */}
                              <div className="absolute top-0 left-0 w-10 h-10">
                                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400"></div>
                                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                <div className="absolute top-1 left-4 w-0.5 h-3 bg-gradient-to-b from-yellow-400 to-transparent"></div>
                                <div className="absolute top-4 left-1 w-3 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                              </div>
                              
                              {/* Top Right */}
                              <div className="absolute top-0 right-0 w-10 h-10">
                                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-400"></div>
                                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                <div className="absolute top-1 right-4 w-0.5 h-3 bg-gradient-to-b from-yellow-400 to-transparent"></div>
                                <div className="absolute top-4 right-1 w-3 h-0.5 bg-gradient-to-l from-yellow-400 to-transparent"></div>
                              </div>
                              
                              {/* Bottom Left */}
                              <div className="absolute bottom-0 left-0 w-10 h-10">
                                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400"></div>
                                <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                <div className="absolute bottom-1 left-4 w-0.5 h-3 bg-gradient-to-t from-yellow-400 to-transparent"></div>
                                <div className="absolute bottom-4 left-1 w-3 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                              </div>
                            
                              {/* Bottom Right */}
                              <div className="absolute bottom-0 right-0 w-10 h-10">
                                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400"></div>
                                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                <div className="absolute bottom-1 right-4 w-0.5 h-3 bg-gradient-to-t from-yellow-400 to-transparent"></div>
                                <div className="absolute bottom-4 right-1 w-3 h-0.5 bg-gradient-to-l from-yellow-400 to-transparent"></div>
                              </div>
                              
                              {/* Certificate image with subtle shadow */}
                              <div className="relative bg-white/5 p-2 rounded-sm backdrop-blur-sm">
                                <img 
                                  src={exp.certificate} 
                                  alt={`${exp.role} Certificate`}
                                  className="w-full h-auto shadow-2xl group-hover/cert:shadow-yellow-500/20 transition-all duration-500"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Type Badge */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Publications Section */}
          <div className="animate-fadeInUp delay-600">
            <div className="text-center mb-10">
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
                📄 Research Publications
              </h3>
              <p className="text-xl text-gray-300 font-medium tracking-wide">
                Contributing to academic research in AI and cybersecurity
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {cv.publications.map((pub, index) => (
                <div key={pub.paperId} className="glass-dark rounded-2xl p-8 hover-lift transition-all duration-300 group border-2 border-blue-400/30 hover:border-blue-400/60 mb-6">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-4xl">📑</div>
                        <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-bold border border-green-400/40 shadow-lg shadow-green-500/20">
                          {pub.status}
                        </span>
                      </div>
                      <h4 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                        {pub.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-5 mb-4 border border-blue-400/20">
                    <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-lg">{pub.conference}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {pub.year}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Paper ID: {pub.paperId}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 
          {/* Achievements & Certifications */}
          <div className="animate-fadeInUp delay-700">
            <div className="text-center mb-10">
              <h3 className="font-display text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                🏆 Achievements & Certifications
              </h3>
              <p className="text-xl text-gray-300 font-medium tracking-wide">
                Professional certifications and continuous learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* NPTEL Data Science Certification */}
              <div className="glass-dark rounded-xl p-6 hover-lift transition-all duration-300 group border border-cyan-400/20 hover:border-cyan-400/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl">
                    📊
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      Data Science for Engineers
                    </h4>
                    <p className="text-orange-300 font-semibold text-sm">NPTEL</p>
                  </div>
                  <span className="ml-auto bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-400/30">
                    Certified
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Applied data analysis and visualization for business insights
                </p>
              </div>

              {/* NPTEL Edge Computing Certification */}
              <div className="glass-dark rounded-xl p-6 hover-lift transition-all duration-300 group border border-purple-400/20 hover:border-purple-400/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                      Edge Computing
                    </h4>
                    <p className="text-orange-300 font-semibold text-sm">NPTEL</p>
                  </div>
                  <span className="ml-auto bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-400/30">
                    Certified
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Real-time analytics and distributed processing for BI systems
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="animate-bounce-in delay-1000">
            <div className="glass rounded-2xl p-8 lg:p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="font-display text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text">My Vision</h3>
                <p className="font-body text-xl text-gray-200 leading-relaxed tracking-wide">
                  I constantly seek opportunities where <span className="text-gradient-fire font-bold text-xl bg-orange-500/10 px-2 py-1 rounded">technology can make a practical and social impact</span>. 
                  My work focuses on transforming raw data—signals, images, audio, or logs—into meaningful insights using 
                  <span className="text-purple-300 font-bold"> machine learning</span>, 
                  <span className="text-cyan-300 font-bold"> computer vision</span>, and 
                  <span className="text-pink-300 font-bold"> deep learning</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
