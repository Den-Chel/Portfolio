import React from "react";
import "../styles/Projects.css";


const projects = [
  {
    title: "Risk & Roll",
    description: "A dynamic and interactive dice game built using HTML, CSS, and JavaScript, featuring responsive design and engaging gameplay mechanics.",
    link: "https://github.com/Den-Chel/Pig-game",
    demo: "https://den-chel.github.io/Pig-game/",
    image: "./img/Risk & Roll pic.png",
  },
  {
    title: "StabilityFirstBank",
    description: "A modern banking application showcasing digital banking services with a responsive design, interactive features, and dynamic content, developed using HTML, CSS, and JavaScript.",
    link: "https://github.com/Den-Chel/StabilityFirstBank",
    demo: "https://den-chel.github.io/StabilityFirstBank/",
    image: "./img/StabilityBank-img.png",
  },
  {
    title: "Cardio App",
    description: "A workout tracking application with an interactive map to log and visualize running and cycling activities, built using HTML, CSS, JavaScript, and the Leaflet library.",
    link: "https://github.com/Den-Chel/CardioApp",
    demo: "https://den-chel.github.io/CardioApp/",
    image: "./img/Cardio-img.png",
  },
  {
    title: "GlazeGalaxy",
    description: "A next-level online bakery with cosmic-inspired treats.",
    link: "https://github.com/Den-Chel/GlazeGalaxy",
    demo: "https://den-chel.github.io/GlazeGalaxy/",
    image: "./img/GlazeGalaxy-img.png",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Use project.image instead of a fixed path */}
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
