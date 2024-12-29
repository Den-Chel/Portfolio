import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Denis Chechulin. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Den-Chel" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/denis-chechulin/" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="fab fa-linkedin"></i>LinkedIn </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="fab fa-twitter"></i> Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
