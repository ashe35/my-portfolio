import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About <span className="highlight">me</span></h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>I build fast, elegant, and secure web experiences powered by modern frontend technologies and researcher cryptography knowledge.</p>
            <p>I'm passionate about frontend development, responsive, user-friendly UI and the exciting challenges of <span className="crypto-highlight">researcher cryptography.</span></p>
          </div>
          <div className="about-skills">
            <div className="skill-tag">TypeScript</div>
            <div className="skill-tag">JavaScript</div>
            <div className="skill-tag">React Js</div>
            <div className="skill-tag">Researcher Cryptography</div>
            <div className="skill-tag">HTML & CSS</div>
            <div className="skill-tag">Responsive Design</div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>COMMITTED PROJECTS</p>
        </div>
      </div>
    </div>
  )
}

export default About