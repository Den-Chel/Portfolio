import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
 <div className="logo">
        <Link to="/">
          <img src="/img/DenisChechulinLogo.png" alt="Denis Chechulin Logo" />
        </Link>
      </div>
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
