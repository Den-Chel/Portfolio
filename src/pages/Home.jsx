import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
        Hi, I’m Denis Chechulin, a Full-Stack Developer passionate about crafting responsive, <br />
        user-friendly web applications.
       </p>
      </div>
      <div class="skills">
    <h2>What I Do</h2>
    <ul>
      <li>🌟 Build responsive web applications</li>
      <li>🚀 Develop backend solutions with Python</li>
      <li>⚡ Create fast, interactive user interfaces with React</li>
    </ul>
    <a href="/projects" class="cta-button">Check Out My Projects</a>

  </div>  
    </section>
    
  );
};

export default Home;
