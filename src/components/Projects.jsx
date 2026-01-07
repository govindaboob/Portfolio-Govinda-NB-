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
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <div className="text-8xl opacity-20">{project.icon || '🚀'}</div>
                  </div>
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                    <div className="text-white">
                      <div className="flex gap-3">
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                            Live Demo
                          </a>
                        )}
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
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-medium hover-lift hover-glow transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
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
