import React from 'react'

const Projects = ({ isDarkMode }) => {
  return (
    <section id="projects" className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Splitwise Website */}
          <div className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className={`h-48 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Splitwise Website</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A collaborative expense tracking application for splitting bills and managing shared expenses among friends and groups.
              </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>React</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Vite</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>React Router DOM</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Frontend</span>
                  <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>Local Storage</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://finalproject-beta-orcin.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#A5D8FF] via-[#D4A5FF] via-[#FFB3D9] to-[#FFF3A5] text-gray-800 hover:shadow-lg">Live Demo</a>
                  <a href="https://github.com/mahi656/Finalproject.git" target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>GitHub</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
