import React, { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { num: '4+', label: 'Projects Shipped' },
  { num: 'MIT', label: 'Griffith Uni' },
  { num: 'EN', label: '+ Mandarin' },
  { num: 'AU PR', label: 'No Sponsorship' },
];

function About() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="section-label reveal">About</div>
      <div className="about__grid">
        <div className="about__left">
          <h2 className="about__title reveal">FULL-STACK,<br />FRONT TO BACK</h2>
          <p className="about__text reveal">
            <strong>Junior full-stack developer</strong> based on the Gold Coast. I hold a
            Master of IT from Griffith University and have shipped multiple end-to-end
            projects — from a <strong>sushi booking platform with Stripe payments</strong> to
            a <strong>celebration album app with animated countdown pages</strong>.
          </p>
          <p className="about__text reveal" style={{ marginTop: '16px' }}>
            I care about interaction design as much as the backend — code that works{' '}
            <em>and</em> feels great to use.
          </p>
        </div>
        <div className="about__stats">
          {stats.map((s, i) => (
            <div key={s.label} className="about__stat reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="about__stat-num">{s.num}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
