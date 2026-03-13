import React from 'react';
import './About.css';

const stats = [
  { num: '3+', label: 'Projects Shipped' },
  { num: 'MIT', label: 'Griffith Uni' },
  { num: 'EN', label: '+ Mandarin' },
  { num: 'AU PR', label: 'No Sponsorship' },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">About</div>

      <div className="about__grid">
        <div className="about__left">
          <div className="about__number">01</div>
          <h2 className="about__title">FULL-STACK,<br />FRONT TO BACK</h2>
          <p className="about__text">
            <strong>Junior full-stack developer</strong> based on the Gold Coast. I hold a
            Master of IT from Griffith University and have shipped multiple end-to-end
            projects — from a <strong>sushi booking platform with Stripe payments</strong> to
            a <strong>celebration album app with animated countdown pages</strong>.
          </p>
          <p className="about__text" style={{ marginTop: '16px' }}>
            I care about interaction design as much as the backend — code that works{' '}
            <em>and</em> feels great to use. Currently looking to join a team where I can
            contribute quickly and keep growing.
          </p>
        </div>

        <div className="about__stats">
          {stats.map(s => (
            <div key={s.label} className="about__stat">
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
