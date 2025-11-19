import { useState, useEffect } from 'react'
import Projects from './Projects'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved !== null ? JSON.parse(saved) : true
  })

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

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode))
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (

    <div className={`min-h-screen scroll-smooth ${isDarkMode ? 'text-white' : 'text-black'}`}>
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
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-sm ${isDarkMode ? 'bg-black/90' : 'bg-white/90'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-1.5 rounded-lg border-2 text-sm font-normal transition-all duration-300 focus:outline-none ${
                  activeSection === 'home'
                    ? (isDarkMode ? 'text-white border-gray-500 bg-gray-800/50' : 'text-black border-gray-400 bg-gray-200/50')
                    : (isDarkMode ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50' : 'text-gray-700 border-gray-300 hover:text-black hover:border-gray-400 hover:bg-gray-200/50')
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-1.5 rounded-lg border-2 text-sm font-normal transition-all duration-300 focus:outline-none ${
                  activeSection === 'about'
                    ? (isDarkMode ? 'text-white border-gray-500 bg-gray-800/50' : 'text-black border-gray-400 bg-gray-200/50')
                    : (isDarkMode ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50' : 'text-gray-700 border-gray-300 hover:text-black hover:border-gray-400 hover:bg-gray-200/50')
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`px-3 py-1.5 rounded-lg border-2 text-sm font-normal transition-all duration-300 focus:outline-none ${
                  activeSection === 'skills'
                    ? (isDarkMode ? 'text-white border-gray-500 bg-gray-800/50' : 'text-black border-gray-400 bg-gray-200/50')
                    : (isDarkMode ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50' : 'text-gray-700 border-gray-300 hover:text-black hover:border-gray-400 hover:bg-gray-200/50')
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-1.5 rounded-lg border-2 text-sm font-normal transition-all duration-300 focus:outline-none ${
                  activeSection === 'projects'
                    ? (isDarkMode ? 'text-white border-gray-500 bg-gray-800/50' : 'text-black border-gray-400 bg-gray-200/50')
                    : (isDarkMode ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50' : 'text-gray-700 border-gray-300 hover:text-black hover:border-gray-400 hover:bg-gray-200/50')
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-1.5 rounded-lg border-2 text-sm font-normal transition-all duration-300 focus:outline-none ${
                  activeSection === 'contact'
                    ? (isDarkMode ? 'text-white border-gray-500 bg-gray-800/50' : 'text-black border-gray-400 bg-gray-200/50')
                    : (isDarkMode ? 'text-gray-300 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-gray-800/50' : 'text-gray-700 border-gray-300 hover:text-black hover:border-gray-400 hover:bg-gray-200/50')
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-black" : "bg-white"
        }`}>
          <div className="text-center px-4 max-w-3xl">
            <h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"}`}>
                Mahi Sawner
            </h1>

    {/* Gradient Title */}
    <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#60A5FA] via-[#A855F7] via-[#EC4899] to-[#FACC15] bg-clip-text text-transparent">
      Full-Stack Developer 
    </h2>


    <p
    className={`text-base md:text-lg leading-relaxed mb-4 ${   
    isDarkMode ? "text-gray-300" : "text-gray-700"
    }`}>
      <strong>Hey there!</strong> I'm <strong>Mahi Sawner</strong>, a versatile
      developer passionate about both <em>front-end</em> and{" "}
      <em>back-end</em> technologies.
    </p>

    <p
      className={`text-base md:text-lg leading-relaxed mb-4 ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      I specialize in creating <strong>efficient, scalable</strong> and{" "}
      <strong>responsive web applications</strong> using modern frameworks like{" "}
      <strong>React</strong> and <strong>Node.js</strong>.
    </p>

    <p
      className={`text-base md:text-lg leading-relaxed mb-8 ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      From sleek UI designs to <strong>real-world problem solving</strong>, I
      love building user-friendly digital experiences that make an impact.
    </p>

    <button
      onClick={() => scrollToSection("projects")}
      className={`font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl ${
        isDarkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      View My Work
    </button>
  </div>
</section>


      {/* About Me Section */}
      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-64 h-64 rounded-full mx-auto mb-8 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Skills</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-blue-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-blue-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>ReactJS</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Frontend Framework</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-green-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-green-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>React Native</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mobile Development</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-green-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-green-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Node.js</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Backend Runtime</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-purple-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-purple-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Express</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Web Framework</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-yellow-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-yellow-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Python</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Programming Language</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-blue-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-blue-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>MySQL</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Database</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-red-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-red-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>DSA</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Data Structures & Algorithms</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-yellow-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-yellow-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>JavaScript</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Programming Language</p>
            </div>
            <div className={`group p-8 rounded-2xl text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/80 hover:shadow-blue-500/20' : 'bg-white/60 border-gray-200 hover:bg-gray-50/80 hover:shadow-blue-500/20'}`}>
              <h3 className={`text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#A855F7] group-hover:via-[#EC4899] group-hover:to-[#FACC15] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Prisma</h3>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Database ORM</p>
            </div>
          </div>
        </div>
      </section>

      <Projects isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact Me</h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and create something amazing together!
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mahi-sawner-a38556304/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/mahi656"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      </footer>
    </div>
  )
}

export default App
