import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const roles = [
  'Full-Stack Developer',
  'Interaction Designer',
  'React / Vue / Node.js',
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
const ORIG = 'WENLUAN FEI';

function Header() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const nameRef = useRef(null);
  const ctaRef = useRef(null);
  const scrambleRef = useRef(null);

  // Typewriter
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

  // Text scramble on name hover
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    let raf;
    const onEnter = () => {
      let iter = 0;
      clearInterval(scrambleRef.current);
      scrambleRef.current = setInterval(() => {
        el.textContent = ORIG.split('').map((c, i) => {
          if (c === ' ') return ' ';
          if (i < iter) return ORIG[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('');
        if (iter >= ORIG.length) clearInterval(scrambleRef.current);
        iter += 0.4;
      }, 40);
    };
    el.addEventListener('mouseenter', onEnter);
    return () => el.removeEventListener('mouseenter', onEnter);
  }, []);

  // Magnetic CTA
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const onMove = e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    };
    const onLeave = () => { btn.style.transform = ''; };
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    return () => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__glow" />
      <div className="hero__eyebrow">Available · Gold Coast / Brisbane · AU Permanent Resident</div>
      <h1 className="hero__name" ref={nameRef}>{ORIG}</h1>
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
          ref={ctaRef}
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
