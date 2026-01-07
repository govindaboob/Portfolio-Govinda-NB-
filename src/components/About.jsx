import React from 'react'

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
  }
]

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-morphing"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-sparkle"></div>
      <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-purple-300 rounded-full animate-sparkle delay-700"></div>
      <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-sparkle delay-1000"></div>
      
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
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Personal Introduction */}
          <div className="animate-slideInUp">
            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-center">
                <h3 className="font-display text-4xl font-bold mb-4 text-cyan-300">
                  🎓 Student & Innovator
                </h3>
              </div>
              
              {/* Main Info Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-center text-gray-300 max-w-3xl mx-auto">
                  Combining technical expertise with leadership skills from sports to build meaningful solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="animate-fadeInUp delay-300">
            <div className="text-center mb-12">
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
            <div className="text-center mb-12">
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
