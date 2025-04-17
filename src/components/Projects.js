import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A web application built with React and Node.js',
      image: 'https://via.placeholder.com/300',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A responsive website for a local business',
      image: 'https://via.placeholder.com/300',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'An e-commerce platform with payment integration',
      image: 'https://via.placeholder.com/300',
      tags: ['React', 'Express', 'Stripe'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 