import React from "react";
import "../styles/Projects.css";


const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Vite.",
    link: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce application featuring a shopping cart and product filters.",
    link: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app built with React to track daily tasks.",
    link: "https://github.com/yourusername/todo-app",
    demo: "https://todo-app-demo.com",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
          <img src="path/to/image.jpg" alt={`${project.title} screenshot`} className="project-image" />
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
