import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Denis Chechulin. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
