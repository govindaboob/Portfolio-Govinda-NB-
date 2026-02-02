import React from 'react'
import experiences from '../data/experience'

export default function Experience() {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text mb-4">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and internship experiences in technology and cybersecurity
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 md:mb-24">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 z-10 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 group">
                  {/* Icon and Duration */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-semibold text-purple-400 mb-1">
                    {exp.company}
                  </div>
                  {exp.department && (
                    <div className="text-md text-gray-400 mb-2">
                      {exp.department}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mb-4">
                    📍 {exp.location}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-yellow-400">🌟</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Highlight */}
                  {exp.project && (
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 mb-6 border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
                        <span>💡</span>
                        Featured Project: {exp.project.name}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {exp.project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-4 py-2 bg-gradient-to-br from-gray-700/50 to-gray-800/50 text-gray-300 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want to know more about my experience?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'contact' }))}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
