// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import CertificatesPage from './components/CertificatesPage';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css'; 

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'} ${isDarkMode ? 'bg-gray-800' : 'bg-blue-100'} `}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <AnimatedBackground isDarkMode={isDarkMode} />
      
      <main className="relative z-10">
        {/* Saare components ko ek ke baad ek render karein aur unhe IDs dein */}
        <section id="home">
          <HomePage />
        </section>
        
        <section id="about">
          <AboutPage />
        </section>
        
        <section id="projects">
          <ProjectsPage />
        </section>

        <section id="certificates">
          <CertificatesPage />
        </section>
        
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;