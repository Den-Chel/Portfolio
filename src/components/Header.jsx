import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <a href="#about" className="header-link">About</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
