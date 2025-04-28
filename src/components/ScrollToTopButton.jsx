import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // 正确引入 FaArrowUp
import '../styles/ScrollToTopButton.css';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);  // 滚动超过300px显示按钮
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // 平滑滚动回顶部
  };

  return (
    <button
      className={`scroll-to-top-button floating-button ${visible ? 'show' : ''}`}  // 根据滚动显示按钮
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="scroll-icon" />
    </button>
  );
}

export default ScrollToTopButton;

