import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Web Developer & Designer</h2>
        <p>I create beautiful and functional websites that help businesses grow.</p>
        <div className="cta-buttons">
          <button className="primary-btn">View My Work</button>
          <button className="secondary-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero; 