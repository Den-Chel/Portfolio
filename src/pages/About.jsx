import React from "react";
import "../styles/About.css";


const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Denis Chechulin, a passionate Full-Stack Developer with
        a love for creating interactive and user-friendly web applications. I
        specialize in Javascript,React,Python.
      </p>
      <p>
        With a background in freelance, I strive to deliver
        high-quality solutions that solve real-world problems. When I'm not
        coding, you can find me exploring new
        technologies, hiking, or doing bjj.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React, Redux</li>
        <li>Responsive Web Design</li>
        <li>Git, GitHub</li>
        <li>Problem-Solving</li>
      </ul>
    </section>
  );
};

export default About;
