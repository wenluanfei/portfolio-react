import React, { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const ref = useRef(null);
  const ctaRef = useRef(null);

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
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
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
    <section className="section contact" id="contact" ref={ref}>
      <div className="section-label reveal" style={{ justifyContent: 'center' }}>Contact</div>
      <div className="contact__big reveal">
        LET'S BUILD<br />SOMETHING <span>GREAT.</span>
      </div>
      <a className="contact__cta reveal" href="mailto:wenluanfei@gmail.com" ref={ctaRef}>
        Send a Message →
      </a>
      <div className="contact__links reveal">
        <a href="mailto:wenluanfei@gmail.com" className="contact__link">wenluanfei@gmail.com</a>
        <a href="https://github.com/wenluanfei" target="_blank" rel="noreferrer" className="contact__link">GitHub</a>
        <a href="https://www.linkedin.com/in/wenluan-fei-650632285/" target="_blank" rel="noreferrer" className="contact__link">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
