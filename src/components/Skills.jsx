import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'Vue 3', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'CSS Animations', 'Tailwind CSS', 'SSR / CSR'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Stripe', 'Cloudinary'],
  },
  {
    category: 'Database & Cloud',
    items: ['MongoDB', 'Supabase', 'Netlify / Vercel', 'Cloudflare R2'],
  },
  {
    category: 'Tools & Design',
    items: ['Figma', 'Git / GitHub', 'Postman', 'Python'],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-label">Skills</div>
      <div className="skills__groups">
        {skillGroups.map(group => (
          <div key={group.category} className="skills__group">
            <div className="skills__group-label">{group.category}</div>
            <div className="skills__tags">
              {group.items.map(item => (
                <span key={item} className="skills__tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
