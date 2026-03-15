import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'CELEBRATION ALBUM',
    desc: 'Built a full-stack celebration page builder for proposals, birthdays, and milestone events, enabling users to create personalized countdown pages with photo uploads, animated templates, and interactive effects.',
    tags: ['React', 'Node.js', 'Supabase', 'AWS S3', 'Docker', 'Vercel', 'Render'],
    status: 'Live',
    live: true,
    url: 'https://momente-one.vercel.app/',
  },
  {
    num: '02',
    title: 'SUSHIBADA',
    desc: 'Developed a full-stack sushi ordering and reservation platform with online payments, admin-side menu management, secure authentication, and cloud-based image handling.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Stripe Checkout', 'Cloudinary'],
    status: 'Live',
    live: true,
    url: 'https://sushibada.netlify.app/',
  },
  {
    num: '03',
    title: 'DICTATION APP',
    desc: 'Created an AI-assisted English dictation platform with authentication, real-time practice and battle features, progress synchronization, AI-generated exercises, text-to-speech playback, and bilingual corpus management.',
    tags: ['React', 'Vite', 'Supabase Auth', 'PostgreSQL', 'Supabase Realtime', 'WebSocket', 'Claude API', 'OpenAI TTS'],
    status: 'Live',
    live: true,
    url: 'https://dictationfei.netlify.app/',
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
              <span className="project-card__arrow">-&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
