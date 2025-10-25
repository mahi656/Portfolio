import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledHandleScroll)
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Scroll Progress Bar - Top */}
      <div className="fixed top-0 left-0 w-full h-px bg-transparent z-50">
        <div
          className="h-full bg-gray-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scroll Progress Bar - Right Side */}
      <div className="fixed top-0 right-0 w-px h-full z-50">
        <div
          className="w-full bg-gray-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeSection === 'home'
                    ? 'text-white border-white bg-white/10 shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeSection === 'about'
                    ? 'text-white border-white bg-white/10 shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeSection === 'skills'
                    ? 'text-white border-white bg-white/10 shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeSection === 'projects'
                    ? 'text-white border-white bg-white/10 shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeSection === 'contact'
                    ? 'text-white border-white bg-white/10 shadow-lg'
                    : 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm Mahi
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating amazing web experiences
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gray-800 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">React</h3>
              <p className="text-gray-400">Frontend Framework</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🟢</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Node.js</h3>
              <p className="text-gray-400">Backend Runtime</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Python</h3>
              <p className="text-gray-400">Programming Language</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-2 text-white">MongoDB</h3>
              <p className="text-gray-400">Database</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Tailwind CSS</h3>
              <p className="text-gray-400">CSS Framework</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Vite</h3>
              <p className="text-gray-400">Build Tool</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Firebase</h3>
              <p className="text-gray-400">Backend as a Service</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-white">React Native</h3>
              <p className="text-gray-400">Mobile Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Project One</h3>
                <p className="text-gray-400 mb-4">
                  A modern web application built with React and Node.js featuring real-time updates and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">React</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">Node.js</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Project Two</h3>
                <p className="text-gray-400 mb-4">
                  Mobile-first e-commerce platform with integrated payment processing and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">Vue.js</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">Firebase</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Project Three</h3>
                <p className="text-gray-400 mb-4">
                  Creative portfolio website with smooth animations and interactive elements built with modern CSS techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">HTML5</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">CSS3</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded text-white">JavaScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Contact Me</h2>
          <p className="text-lg text-gray-400 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and create something amazing together!
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-2xl hover:text-white transition-colors">📧</a>
            <a href="#" className="text-2xl hover:text-white transition-colors">💼</a>
            <a href="#" className="text-2xl hover:text-white transition-colors">🐦</a>
            <a href="#" className="text-2xl hover:text-white transition-colors">💻</a>
          </div>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Portfolio. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
