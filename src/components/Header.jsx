import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  // State to control whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the isOpen state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Hamburger clicked. isOpen is now:", !isOpen);
  };

  // Close the menu when a link is clicked (optional convenience)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/img/DenisChechulinLogo.png" alt="Denis Chechulin Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
     
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <nav className={`header-nav ${isOpen ? "open" : ""}`}>
        <Link to="/" className="header-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="header-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/projects" className="header-link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" className="header-link" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
