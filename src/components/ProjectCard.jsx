import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-all duration-500"></div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <h3 className="font-semibold text-lg sm:text-xl mb-3 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((t, index) => (
            <span 
              key={t} 
              className="text-xs px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-indigo-200"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="relative text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-all duration-300 group/link"
            >
              Live Demo
              <span className="inline-block ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover/link:w-full transition-all duration-300"></span>
            </a>
          )}
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noreferrer" 
              className="relative text-gray-600 hover:text-gray-800 font-medium text-sm transition-all duration-300 group/link"
            >
              Source Code
              <span className="inline-block ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover/link:w-full transition-all duration-300"></span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
