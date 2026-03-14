import React, { useEffect, useRef } from 'react';
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
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="section-label reveal">Skills</div>
      <div className="skills__groups">
        {skillGroups.map((group, gi) => (
          <div key={group.category} className="skills__group reveal" style={{ transitionDelay: `${gi * 0.1}s` }}>
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
