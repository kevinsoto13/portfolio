import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import RainBackground from '../components/RainBackground';
import Footer from '../components/Footer';

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
      <div id="top"></div>
      
      <RainBackground />
      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Portfolio;
