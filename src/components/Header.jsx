import React from 'react';
import '../styles/Header.css';


import myPhoto from '../assets/my-photo.jpg';

function Header() {
  return (
    <header className="intro-section">
      <img src={myPhoto} alt="ZOE" className="profile-photo" />
      <h1>Hello, I'm ZOE</h1>
      <p>Master of IT | Fullstack Developer</p>
    </header>
  );
}

export default Header;
