import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-label">Contact</div>

      <div className="contact__big">
        LET'S BUILD<br />SOMETHING <span>GREAT.</span>
      </div>

      <a className="contact__cta" href="mailto:wenluanfei@gmail.com">
        Send a Message →
      </a>

      <div className="contact__links">
        <a href="mailto:wenluanfei@gmail.com" className="contact__link">
          wenluanfei@gmail.com
        </a>
        <a
          href="https://github.com/wenluanfei"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/wenluan-fei-650632285/"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
