import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate web developer with expertise in creating responsive, 
              user-friendly websites and applications. I specialize in React.js, JavaScript, 
              HTML, and CSS.
            </p>
            <p>
              With a background in [your background], I bring a unique perspective to every 
              project I work on. I'm dedicated to writing clean, efficient code and creating 
              intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you can find me [your hobbies/interests].
            </p>
          </div>
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Node.js</span>
              <span>Git</span>
              <span>Responsive Design</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 