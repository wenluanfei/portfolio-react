import React, { useState, useRef, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [openSection, setOpenSection] = useState(null);
  const sectionRefs = useRef({});

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const skillsData = {
    Frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    Backend: ['Python', 'SQL', 'Node.js', 'MongoDB'],
    Tools: ['yarn', 'GitHub', 'VS Code'],
    Deployment: ['Netlify'],
    Design: ['Figma (basic)'],
  };

  return (
    <div className="section" id="skills">
      <h2>Skills</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 onClick={() => toggleSection(category)} className="skill-header">
            {category} {openSection === category ? '▲' : '▼'}
          </h3>
          <div
            className={`skill-content ${openSection === category ? 'open' : ''}`}
            ref={(el) => (sectionRefs.current[category] = el)}
            style={{
              maxHeight: openSection === category
                ? `${sectionRefs.current[category]?.scrollHeight}px`
                : '0px'
            }}
          >
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;