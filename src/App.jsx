import React, { useEffect, useRef } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const followerRef = useRef(null);
  const dotRef = useRef(null);
  const mx = useRef(-200), my = useRef(-200);
  const fx = useRef(-200), fy = useRef(-200);

  useEffect(() => {
    const onMove = e => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
        dotRef.current.style.opacity = "1";
      }
      if (followerRef.current) {
        followerRef.current.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", onMove);
    let animId;
    const animate = () => {
      fx.current += (mx.current - fx.current) * 0.1;
      fy.current += (my.current - fy.current) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.left = fx.current + "px";
        followerRef.current.style.top = fy.current + "px";
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="App">
      <div className="progress-track">
        <div id="scroll-progress" className="progress-fill" />
      </div>
      <div className="cursor-follower" ref={followerRef} />
      <div className="cursor-dot" ref={dotRef} />
      <div className="grain-overlay" />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
