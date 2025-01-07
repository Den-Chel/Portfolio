import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I’m Denis Chechulin </h1>
        <p>Full-Stack Developer passionate about crafting responsive, <br />
        user-friendly web applications.</p>
      </div>
      <div class="skills">
    <h2>What I Do</h2>
    <ul>
      <li>🌟 Build responsive web applications</li>
      <li>🚀 Develop backend solutions with Python</li>
      <li>⚡ Create fast, interactive user interfaces with React</li>
    </ul>
    <a href="/projects" class="cta-button">Projects</a>

  </div>  
    </section>
    
  );
};

export default Home;
