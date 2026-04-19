import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-content">
        <img src={profile_img} alt="Ashetu Desta" />
        <div className="hero-text">
          <h1>
            <span className="intro">I am </span>
            <span className="name">Ashetu Desta</span>
            <span className="intro">, a </span>
            <span className="role">frontend developer </span>
            <span className="intro">creating clean, fast, and modern digital experiences with researcher cryptography expertise from Ethiopia.</span>
          </h1>
          <p>Frontend Developer & Researcher Cryptography</p>
          <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero