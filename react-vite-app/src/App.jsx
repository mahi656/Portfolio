 import { useState, useEffect } from 'react'

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
            <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Portfolio</div>
            <div className="flex items-center space-x-4">
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

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <span className="text-4xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Project One</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  A modern web application built with React and Node.js featuring real-time updates and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>React</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Node.js</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Live Demo</a>
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}>GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Project Two</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Mobile-first e-commerce platform with integrated payment processing and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Vue.js</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Firebase</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Live Demo</a>
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}>GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <span className="text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Project Three</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Creative portfolio website with smooth animations and interactive elements built with modern CSS techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>HTML5</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>CSS3</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>JavaScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Live Demo</a>
                  <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact Me</h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and create something amazing together!
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className={`text-2xl transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>📧</a>
            <a href="#" className={`text-2xl transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>💼</a>
            <a href="#" className={`text-2xl transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>🐦</a>
            <a href="#" className={`text-2xl transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>💻</a>
          </div>
          <button className={`font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl ${
            isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
          }`}>
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-gray-400 ${isDarkMode ? '' : 'text-gray-600'}`}>
            © 2024 Portfolio. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
