import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <div className="title-underline"></div>
      </div>
      
      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h2 className="card-title">Education</h2>
          <h3 className="card-subtitle">BSc in Computer Science</h3>
          <p className="card-institution">Haramaya University</p>
          <p className="card-period">2023 - Present</p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2 className="card-title">Current Role</h2>
          <h3 className="card-subtitle">Computer Science Student</h3>
          <p className="card-institution">Haramaya University</p>
          <p className="card-description">AI Trainer & Full Stack Developer</p>
          <p className="card-description">Post-Quantum Cryptography Researcher</p>
          <p className="card-period">2024 - Present</p>
        </div>
      </div>

      <div className="tech-stack-section">
        <div className="tech-stack-header">
          <i className="fas fa-code"></i>
          <h2>Tech Stack</h2>
        </div>
        
        <div className="about-skills-grid">
          <div className="skill-category">
            <h3 className="category-title">LANGUAGES</h3>
            <div className="skill-tags">
              <div className="skill-tag">Python</div>
              <div className="skill-tag">C++</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">TypeScript</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">FRONTEND</h3>
            <div className="skill-tags">
              <div className="skill-tag">React</div>
              <div className="skill-tag">Next.js</div>
              <div className="skill-tag">Tailwind CSS</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">BACKEND</h3>
            <div className="skill-tags">
              <div className="skill-tag">NodeJS</div>
              <div className="skill-tag">ExpressJS</div>
              <div className="skill-tag">FastAPI</div>
              <div className="skill-tag">Flask</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">DATABASE</h3>
            <div className="skill-tags">
              <div className="skill-tag">MongoDB</div>
              <div className="skill-tag">MySQL</div>
              <div className="skill-tag">SQLite</div>
              <div className="skill-tag">PostgreSQL</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">SECURITY</h3>
            <div className="skill-tags">
              <div className="skill-tag">Cryptography</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">DEVOPS</h3>
            <div className="skill-tags">
              <div className="skill-tag">Git</div>
              <div className="skill-tag">GitHub</div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">MACHINE LEARNING & AI TOOLS</h3>
            <div className="skill-tags">
              <div className="skill-tag">scikit-learn</div>
              <div className="skill-tag">TensorFlow</div>
              <div className="skill-tag">Flask ML</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About