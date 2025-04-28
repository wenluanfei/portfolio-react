import React, { useState } from 'react';
import '../styles/Projects.css';

import todoImg from '../assets/projects/todo.jpg';
import weatherImg from '../assets/projects/weather.jpg';
import portfolioImg from '../assets/projects/portfolio.jpg';

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectList = [
    {
      title: 'To-Do App',
      image: todoImg,
      description: 'A task management app with persistent local storage.',
      tech: 'React, LocalStorage, CSS',
      detail: 'Users can add, delete, and mark tasks. Data saved locally.',
    },
    {
      title: 'Weather App',
      image: weatherImg,
      description: 'Real-time weather using OpenWeather API.',
      tech: 'React, API, TailwindCSS',
      detail: 'City search, weather icons, responsive layout.',
    },
    {
      title: 'Portfolio Website',
      image: portfolioImg,
      description: 'This site! Built from scratch with animations.',
      tech: 'React, AOS, GitHub Pages',
      detail: 'Fully responsive, dark mode, deployed on GitHub Pages.',
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="expand-btn" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? '▲ View Less' : '▼ View More'}
            </button>

            {expandedIndex === index && (
              <div className="project-details">
                <p><strong>Tech Stack:</strong> {project.tech}</p>
                <p><strong>Details:</strong> {project.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
