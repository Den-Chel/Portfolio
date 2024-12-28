import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/projects" className="header-link">Projects</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
