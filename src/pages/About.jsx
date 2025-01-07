import React from "react";
import "../styles/About.css";


const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
      Hi, I'm Denis Chechulin, a passionate Full-Stack Developer who loves creating interactive and user-friendly web applications. I specialize in JavaScript, React, and Python.
      </p>
      <p>
      With a background in freelance work, I focus on delivering high-quality solutions that address real-world challenges. When I'm not coding, I enjoy exploring new technologies, hiking, or diving into new hobbies.
      </p>
      <h2>My Skills</h2>
  <div class="skills-container">
    <div class="skill">HTML</div>
    <div class="skill">CSS</div>
    <div class="skill">JavaScript</div>
    <div class="skill">React</div>
    <div class="skill">Node.js</div>
    <div class="skill">Python</div>
    <div class="skill">Git</div>
    <div class="skill">GitHub</div>
    <div class="skill">Responsive Design</div>
    <div class="skill">SEO</div>
  </div>
    </section>
  );
};

export default About;
