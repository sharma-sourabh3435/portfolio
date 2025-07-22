import './Navigation.css';
import { useState, useEffect } from 'react';

function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check user preference from localStorage or system preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    
    // Create and trigger animation
    const animationElement = document.createElement('div');
    animationElement.className = newTheme ? 'rocket-animation' : 'sun-animation';
    animationElement.innerHTML = newTheme ? '🚀' : '☀️';
    document.body.appendChild(animationElement);
    
    // Start theme transition after a longer delay to let animation build up
    setTimeout(() => {
      setIsDarkMode(newTheme);
    }, 500);
    
    // Remove animation element after animation completes
    setTimeout(() => {
      if (document.body.contains(animationElement)) {
        document.body.removeChild(animationElement);
      }
    }, 3700);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-content">
            <div className="sparkle-icon">✨</div>
            <h2>Portfolio</h2>
          </div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#experience" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#resume" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              Resume
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          <span className="theme-icon">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
