import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const socialLinks = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/govindaboob', color: 'from-gray-600 to-gray-900' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/govindanb/', color: 'from-blue-600 to-blue-800' },
  { name: 'Email', icon: 'email', url: 'mailto:govindaboob11@gmail.com', color: 'from-rose-500 to-rose-700' }
]

const SocialIcon = ({ icon }) => {
  switch(icon) {
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    case 'email':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isHovered, setIsHovered] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('NQ_bBlh8fhD6t04Bn')
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus({ type: '', message: '' })

    console.log('Form data:', formData) // Debug log

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Govinda'
      }

      console.log('Sending with params:', templateParams) // Debug log
      console.log('Service ID:', 'service_vj6lnll')
      console.log('Template ID:', 'template_y61z0v9')

      const result = await emailjs.send(
        'service_vj6lnll',
        'template_y61z0v9',
        templateParams
      )
      
      console.log('SUCCESS! Email sent:', result)
      setStatus({
        type: 'success',
        message: '🎉 Message sent successfully! I\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('FULL ERROR OBJECT:', error)
      console.error('Error status:', error.status)
      console.error('Error text:', error.text)
      console.error('Error message:', error.message)
      
      let errorMessage = '❌ Something went wrong. '
      
      if (error.text) {
        errorMessage += `Error: ${error.text}`
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`
      } else {
        errorMessage += 'Please check your internet connection or contact me via WhatsApp.'
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="relative bg-indigo-900 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden min-h-screen">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-morphing"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-indigo-500/10 rounded-full blur-2xl animate-morphing delay-1000"></div>
      </div>
      
      {/* Floating Stars */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-indigo-300 rounded-full animate-sparkle"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-sparkle delay-500"></div>
      <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle delay-1000"></div>
      <div className="absolute top-1/6 right-1/6 w-2.5 h-2.5 bg-blue-300 rounded-full animate-sparkle delay-1500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-galaxy animate-gradient">Let's Connect</span>
          </h2>
          <p className="font-heading text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's start a conversation 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="">
            <div className="glass-dark rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h3 className="font-display text-3xl font-bold mb-8 text-gradient-galaxy">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="delay-400">
                  <label className="block font-heading font-semibold text-indigo-200 mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-indigo-300/30 rounded-xl text-white placeholder-indigo-300 focus:border-purple-400 focus:bg-white/20 transition-all duration-300 font-body"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="delay-300">
                  <label className="block font-heading font-semibold text-indigo-200 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-indigo-300/30 rounded-xl text-white placeholder-indigo-300 focus:border-purple-400 focus:bg-white/20 transition-all duration-300 font-body"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="delay-600">
                  <label className="block font-heading font-semibold text-indigo-200 mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-indigo-300/30 rounded-xl text-white placeholder-indigo-300 focus:border-purple-400 focus:bg-white/20 transition-all duration-300 font-body resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-xl font-body text-sm ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 border border-green-400/50 text-green-200' 
                      : 'bg-red-500/20 border border-red-400/50 text-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSending}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`group w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 font-heading font-bold text-lg shadow-2xl hover-glow hover-lift delay-800 ${
                    isSending ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {isSending ? (
                      <>
                        <svg className="mr-3 w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : isHovered ? (
                      <>
                        <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Launch Message
                      </>
                    ) : (
                      <>
                        <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="">
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="glass-dark rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 delay-300">
                <h3 className="font-display text-2xl font-bold mb-6 text-gradient-galaxy">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:govindaboob11@gmail.com" className="group flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover-lift">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white group-hover:text-pink-300 transition-colors">Email Me</div>
                      <div className="font-mono text-sm text-indigo-300">govindaboob11@gmail.com</div>
                    </div>
                  </a>
                  
                  <div className="group flex items-center p-4 bg-white/10 rounded-xl">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white">Location</div>
                      <div className="font-mono text-sm text-indigo-300">Bangalore, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-dark rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 delay-500">
                <h3 className="font-display text-2xl font-bold mb-6 text-gradient-galaxy">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-gradient-to-r ${social.color} rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-in`}
                      style={{animationDelay: `${(index + 1) * 200}ms`}}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                          <SocialIcon icon={social.icon} />
                        </div>
                        <div className="font-heading font-semibold text-white text-sm group-hover:text-gray-100 transition-colors">
                          {social.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="glass-dark rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 delay-700">
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-bounce">🚀</div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">Quick Response</h4>
                  <p className="font-body text-indigo-200">I typically respond within 24 hours during weekdays!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
