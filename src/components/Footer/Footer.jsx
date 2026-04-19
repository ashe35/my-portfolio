import React, { useState } from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className='footer'>

      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-top-left">
            
            <p>Thanks for stopping by. I'm always open to new ideas, collaborations, and conversations.</p>
        </div>

        <form onSubmit={handleSubscribe} className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="User icon" />
                <input 
                  type="email" 
                  id="footer-email"
                  placeholder='Enter your email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </div>
            <button type="submit" className="footer-subscribe">
                Subscribe
            </button>
        </form>
      </div>

      {/* SEPARATOR */}
      <hr />

      {/* SOCIAL LINKS */}
      <div className="footer-social">
        <a href="https://github.com/ashe35" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/ashetu-desta-9501a9379" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.instagram.com/destaashetu/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>

      {/* SEPARATOR */}
      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Ashetu Desta — All rights reserved.</p>
        <div className="footer-bottom-right">
            <AnchorLink className='footer-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
      </div>

    </div>
  )
}

export default Footer
