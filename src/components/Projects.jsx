import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'CELEBRATION ALBUM',
    desc: 'A platform where users create personalised countdown celebration pages — proposals, birthdays — with photo uploads, animated templates, and confetti effects.',
    tags: ['Next.js', 'Supabase', 'Cloudflare R2', 'SSR + CSR', 'Interaction Design'],
    status: 'Live ↗',
    live: true,
    url: 'https://momente-one.vercel.app/',
  },
  {
    num: '02',
    title: 'SUSHIBADA',
    desc: 'Full-stack sushi booking & ordering platform with Stripe Checkout, JWT-secured admin dashboard, menu CRUD, and Cloudinary image upload.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Netlify Functions'],
    status: 'Live ↗',
    live: true,
    url: 'https://sushibada.netlify.app/',
  },
  {
    num: '03',
    title: 'DICTATION APP',
    desc: 'Interactive workplace-English dictation practice tool for non-native speakers, with audio playback, user input validation, and results feedback.',
    tags: ['Vue 3', 'JavaScript', 'Interaction Design', 'Accessibility'],
    status: 'Live ↗',
    live: false,
    url: null,
  },
];

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 130);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="section-label reveal">Selected Projects</div>
      <div className="projects__list">
        {projects.map(p => (
          <div
            key={p.num}
            className={`project-card reveal ${p.url ? 'project-card--clickable' : ''}`}
            onClick={() => p.url && window.open(p.url, '_blank')}
          >
            <div className="project-card__num">{p.num}</div>
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-card__right">
              <span className={`project-card__status ${p.live ? 'project-card__status--live' : ''}`}>
                {p.status}
              </span>
              <span className="project-card__arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
