import React, { useState } from 'react';
import '../styles/Projects.css';

import todoImg from '../assets/projects/todolist.jpg';
import sushiImg from '../assets/projects/sushiweb.jpg';
import portfolioImg from '../assets/projects/portfolioweb.jpg';

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectList = [
    {
      title: 'To-Do List',
      image: todoImg,
      description: 'A full-stack task management application with MongoDB backend and animated React frontend.',
      tech: 'React, Express.js, MongoDB, Mongoose, Framer Motion, Axios, CSS',
      detail: 'Users can add, delete, edit, and toggle tasks. Backend built with Express and MongoDB for data persistence. Frontend features interactive animations and visual rewards for task streaks.',

    },
    {
      title: 'Sushi Website',
      image: sushiImg,
      description: 'A responsive sushi platter reservation website for a local restaurant in Oxenford, supporting online orders, image-rich menus, admin dashboard, and Stripe payment.',
      tech: 'Vue 3, Vite, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Cloudinary, Stripe API',
      detail: 'Customers can browse categorized sushi menus, place platter reservations with custom options, and receive confirmation via email. Admins can log in to manage orders and menu items securely with token-based authentication and Cloudinary image uploads.',
    },
    {
      title: 'Personal Portfolio Site',
      image: portfolioImg,
      description: 'A sleek, interactive developer portfolio showcasing projects, skills, and contact info.',
      tech: 'React, AOS (Animate on Scroll), Netlify, Tailwind CSS',
      detail: 'Responsive design with light/dark mode toggle, smooth scroll-triggered animations, and seamless deployment via Netlify.',

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
