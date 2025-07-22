import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Chatbot from './Chatbot';
// import './protection.js';
import { useState, useEffect } from 'react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  const resume = "https://drive.google.com/file/d/1F9P_pr0K6HF1D6lkitrZE1-oeutFQuQR/view?usp=drive_link";
  const iFrameResume = "https://drive.google.com/file/d/1F9P_pr0K6HF1D6lkitrZE1-oeutFQuQR/preview";

  return (
    <div className="App">
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navigation />
      
      {/* Main content with sections */}
      <main className="main-content">
        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <div className="about-content">
              <div className="about-left">
                <div className="profile-image">
                  <img src="/me.WEBP" alt="Profile" />
                </div>
                <div className="social-icons">
                  <a href="https://github.com/sharma-sourabh3435" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/-sourabh-/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://sourabh3435.substack.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="about-right">
                <div className="about-text">
                  <p>Hi, I'm a passionate software developer who loves math, distributed systems, and building scalable applications. 
                  I love working with modern technologies and enjoy solving complex problems.</p>
                  <p>
                    Outside of tech, I'm usually exploring recipes or hiking trails.
                    <span className="cooking-animation">
                      <span className="pan">🍳</span>
                      <span className="vegetables">🥕🥬🌶️</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="experience" className="section">
          <div className="container">
            <h2>Experience</h2>
            <div className="experience-grid">
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>Software Developer</h3>
                    <h4>Ocean Sonics</h4>
                  </div>
                  <div className="experience-details">
                    <span className="experience-date">July 2024 -- Present</span>
                    <span className="experience-location">Halifax, NS</span>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Built a C++/Qt plugin to detect and visualize porpoise clicks from hydrophone data in real-time, enabling researchers to monitor marine mammal activity more effectively</li>
                  <li>Reduced acoustic processing latency by 15% by profiling bottlenecks and applying targeted low-level optimizations in signal processing code</li>
                  <li>Developed anomaly detection models using encoder-based deep learning architectures, increasing detection precision in acoustic time series and spectrogram data</li>
                  <li>Led code reviews and executed best practices resulting in a 30% reduction in software defects and increase in codebase maintainability</li>
                  <li>Implemented comprehensive unit and integration tests using Google Test, achieving a 50% gain in test coverage and a 15% decrease in post-release bugs</li>
                </ul>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>Research Assistant</h3>
                    <h4>Dalhousie University</h4>
                  </div>
                  <div className="experience-details">
                    <span className="experience-date">May 2023 -- June 2024</span>
                    <span className="experience-location">Halifax, NS</span>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Implemented several convolutional neural network (CNN) based models for feature extraction and classification tasks in python</li>
                  <li>Utilized deep learning frameworks like PyTorch, resulting in a 25% reduction in model development time and a 20% increase in model accuracy</li>
                  <li>Specialized in vision transformer (ViT) models, achieving state-of-the-art performance in image segmentation tasks with a 35% improvement in accuracy compared to baseline models</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-title">
                    <h3>Algorithmic Trader</h3>
                    <div className="project-tech">
                      <span>Python</span>
                      <span>Pandas</span>
                      <span>Numpy</span>
                      <span>Keras</span>
                      <span>TensorFlow</span>
                      <span>Git</span>
                      <span>Docker</span>
                    </div>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://github.com/sharma-sourabh3435/ready_trader_go" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      [code]
                    </a>
                  </div>
                </div>
                <ul className="project-list">
                  <li>Leveraged advanced data analysis techniques utilizing Pandas and Numpy, resulting in a 20% boost in predictive accuracy when processing and analyzing large datasets</li>
                  <li>Utilized Keras and TensorFlow to develop and fine-tune deep learning models, leading to a 15% improvement in pattern recognition accuracy for market trends</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-title">
                    <h3>GigsNow</h3>
                    <div className="project-tech">
                      <span>Java</span>
                      <span>Android Studio</span>
                      <span>Firebase</span>
                      <span>Git</span>
                    </div>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://github.com/sharma-sourabh3435/Odd-Jobs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      [code]
                    </a>
                  </div>
                </div>
                <ul className="project-list">
                  <li>Spearheaded the design and development of 'GigsNow', an Android application in Android Studio using Java, aimed at streamlining job discovery and listings for users</li>
                  <li>Engineered advanced job searching, posting, and application submission functionalities, resulting in a 30% growth in user engagement and interaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="resume" className="section">
          <div className="container resume-section-container">
            <h2>Resume</h2>
            <p>View or download my resume here.</p>
            <div className="resume-container">
              <div className="resume-viewer">
                <iframe
                  src={iFrameResume}
                  width="100%"
                  height="600"
                  title="Resume PDF"
                  allowFullScreen
                >
                  <p>Your browser does not support PDFs. <a href={resume}>Download the PDF</a>.</p>
                </iframe>
              </div>
              <div className="resume-download">
                <a 
                  href={resume} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
