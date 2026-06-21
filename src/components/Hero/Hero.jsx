import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-content">
        <div className="hero-left">
          <div className="terminal-command">
            <span className="command-prompt">$</span> whoami
          </div>
          <h1 className="hero-name">Ashetu Desta</h1>
          <p className="hero-role">Full Stack Developer_</p>
          <p className="hero-description">
            Crafting modern web solutions with expertise in full-stack development, 
            AI integration, and cybersecurity.
          </p>
          <div className="hero-action">
            <a href="/Ashetu_Desta_CV.pdf" download="Ashetu_Desta_CV.pdf" className="hero-button download-cv">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-circle">
            <img src={profile_img} alt="Ashetu Desta" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero