import React from 'react';

interface HeroProps {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ darkMode, scrollToSection }) => (
  <section
  id="hero"
  className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-center bg-no-repeat bg-cover`}
>
    <div
    className="absolute inset-0 bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(/logo.png)`,
      backgroundSize: '33%',     // tamaño reducido
      opacity: 0.2,              // opacidad baja
      pointerEvents: 'none',     // para que no interfiera con clicks
    }}
  />
    <div className="text-center z-10">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        Developer
      </h1>
      <h2 className="text-4xl md:text-6xl font-light mb-8 opacity-80">
        Front End
      </h2>
      <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Crafting modern and interactive user interfaces with the latest web technologies.
      </p>
      <button
        onClick={() => scrollToSection('projects')}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
      >
        My Projects
      </button>
    </div>
  </section>
);

export default Hero;
