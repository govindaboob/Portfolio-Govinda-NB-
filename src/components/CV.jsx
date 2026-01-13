import React, { useState } from 'react'
import cv from '../data/cv'

const CVSection = ({ title, icon, children, delay = 0 }) => (
  <div className={`animate-fadeInUp delay-${delay} mb-8`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="text-2xl">{icon}</div>
      <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
    </div>
    <div className="ml-8">{children}</div>
  </div>
)

export default function CV() {
  const [activeTab, setActiveTab] = useState('overview')
  
  const onDownload = () => {
    const link = document.createElement('a')
    link.href = '/Govinda N B Resume.pdf'
    link.download = 'Govinda N B Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '🚀' }
  ]

  return (
    <section id="cv" className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-stars opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-morphing"></div>
        <div className="absolute bottom-20 left-16 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-orange-300 rounded-full animate-sparkle"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-red-300 rounded-full animate-sparkle delay-700"></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 pt-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-rainbow animate-gradient">Curriculum Vitae</span>
          </h2>
          <p className="font-heading text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
            Professional journey, skills, and achievements in one place 📜
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onDownload} 
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-heading font-semibold shadow-2xl hover-glow hover-lift"
            >
              <span className="flex items-center">
                <svg className="mr-3 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </button>
            
            <a
              href="mailto:govindaboob11@gmail.com?subject=Opportunity Discussion&body=Hi Govinda,%0D%0A%0D%0AI saw your CV and would like to discuss an opportunity with you."
              className="group px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 font-heading font-semibold hover-lift"
            >
              <span className="flex items-center">
                <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </a>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp delay-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300 hover-lift ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-orange-200 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* CV Content */}
        <div id="cv-print" className="glass-dark rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {activeTab === 'overview' && (
            <div className="animate-fadeInUp">
              <div className="text-center mb-12">
                <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-white">{cv.name}</h1>
                <p className="font-heading text-xl lg:text-2xl text-orange-300 mb-2">{cv.title}</p>
                <p className="font-mono text-orange-200">{cv.contact.email}</p>
              </div>
              
              <CVSection title="Professional Summary" icon="📝" delay={200}>
                <p className="font-body text-lg text-gray-300 leading-relaxed">{cv.summary}</p>
              </CVSection>
              
              <CVSection title="Quick Highlights" icon="✨" delay={400}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-xl hover-lift">
                    <div className="text-3xl mb-2 text-orange-400">🎓</div>
                    <div className="font-heading text-sm text-gray-300">CS Student at RVCE</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl hover-lift">
                    <div className="text-3xl mb-2 text-red-400">🤖</div>
                    <div className="font-heading text-sm text-gray-300">AI/ML Enthusiast</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl hover-lift">
                    <div className="text-3xl mb-2 text-pink-400">🏒</div>
                    <div className="font-heading text-sm text-gray-300">State-Level Hockey</div>
                  </div>
                </div>
              </CVSection>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="animate-fadeInUp">
              <CVSection title="Professional Experience" icon="💼">
                <div className="space-y-8">
                  {cv.experience.map((exp, index) => (
                    <div key={exp.company} className={`group animate-slideInLeft delay-${(index + 1) * 200}`}>
                      <div className="border-l-4 border-orange-400 pl-8 py-4 hover:border-red-400 transition-colors duration-300">
                        <h4 className="font-heading text-xl font-bold text-white group-hover:text-orange-300 transition-colors mb-3">{exp.role}</h4>
                        <div className="font-heading text-lg text-red-300 mb-3">{exp.company}</div>
                        <p className="font-body text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CVSection>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="animate-fadeInUp">
              <CVSection title="Education & Certifications" icon="🎓">
                <div className="space-y-6">
                  {cv.education.map((edu, index) => (
                    <div key={edu.school} className={`group animate-slideInRight delay-${(index + 1) * 200}`}>
                      <div className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift">
                        <h4 className="font-heading text-xl font-semibold text-white group-hover:text-orange-300 transition-colors mb-2">{edu.degree}</h4>
                        <div className="font-body text-orange-300 mb-2">{edu.school}</div>
                        {edu.details && <p className="font-body text-gray-400 text-sm">{edu.details}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CVSection>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="animate-fadeInUp">
              <CVSection title="Technical Skills" icon="🚀">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cv.skills.map((skill, index) => (
                    <div 
                      key={skill}
                      className={`group p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 hover-lift animate-bounce-in`}
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="font-heading font-semibold text-white group-hover:text-orange-300 transition-colors text-center">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </CVSection>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}