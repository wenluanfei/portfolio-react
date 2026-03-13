import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React', highlight: true },
  { name: 'Vue 3', highlight: true },
  { name: 'Next.js', highlight: true },
  { name: 'TypeScript', highlight: true },
  { name: 'JavaScript (ES6+)', highlight: false },
  { name: 'HTML5 / CSS3', highlight: false },
  { name: 'CSS Animations', highlight: false },
  { name: 'Tailwind CSS', highlight: true },
  { name: 'Node.js', highlight: false },
  { name: 'Express', highlight: false },
  { name: 'REST APIs', highlight: false },
  { name: 'JWT Auth', highlight: false },
  { name: 'MongoDB', highlight: false },
  { name: 'Supabase', highlight: false },
  { name: 'Stripe', highlight: false },
  { name: 'Cloudinary', highlight: false },
  { name: 'Figma', highlight: true },
  { name: 'Git / GitHub', highlight: false },
  { name: 'Postman', highlight: false },
  { name: 'Netlify / Vercel', highlight: false },
  { name: 'Python', highlight: false },
  { name: 'SSR / CSR', highlight: false },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-label">Skills</div>
      <div className="skills__grid">
        {skills.map(s => (
          <span
            key={s.name}
            className={`skills__tag ${s.highlight ? 'skills__tag--highlight' : ''}`}
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
