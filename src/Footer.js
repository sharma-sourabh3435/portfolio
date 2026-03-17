import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a 
            href="https://www.linkedin.com/in/-sourabh-/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/sharma-sourabh3435" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://sourabh3435.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Substack
          </a>
        </div>
        <div className="footer-credit">
          <p>Made by me</p>
          <p className="vibe-coded">✦ ~30% vibe coded ✦</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
