import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="section" id="skills">
      <h2>Skills</h2>

      <h3>Frontend</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Tailwind CSS</li>
      </ul>

      <h3>Backend</h3>
      <ul>
        <li>Python</li>
        <li>SQL</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>

      <h3>Tools</h3>
      <ul>
        <li>yarn</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>

      <h3>Deployment</h3>
      <ul>
        <li>Netlify</li>
      </ul>

      <h3>Design</h3>
      <ul>
        <li>Figma (basic)</li>
      </ul>
    </div>
  );
}

export default Skills;

