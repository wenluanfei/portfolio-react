import React, { useState, useEffect } from 'react';
import './Header.css';

const roles = [
  'Full-Stack Developer',
  'Interaction Designer',
  'React / Vue / Node.js',
];

function Header() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setRoleIdx(r => (r + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="hero" id="home">
      <div className="hero__glow" />

      <div className="hero__eyebrow">Available · Gold Coast / Brisbane · AU Permanent Resident</div>

      <h1 className="hero__name">
        WEN<span>LUAN</span><br />FEI
      </h1>

      <div className="hero__bottom">
        <div className="hero__left">
          <div className="hero__typewriter">
            {displayed}<span className="hero__cursor">_</span>
          </div>
          <p className="hero__sub">
            Building <strong>end-to-end web products</strong> with a focus on
            interaction design, clean code, and things that actually feel good to use.
          </p>
        </div>
        <a
          className="hero__cta"
          href="#projects"
          onClick={e => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View Projects ↓
        </a>
      </div>
    </section>
  );
}

export default Header;
