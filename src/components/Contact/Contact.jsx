import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setShowMessage(true);
        event.target.reset();
        setTimeout(() => {
          setShowMessage(false);
        }, 5000); // Message disappears after 5 seconds
      } else {
        alert("Error: " + (res.message || "Something went wrong"));
        console.log("Error details:", res);
      }
    } catch (error) {
      alert("Failed to submit form. Please check your internet connection.");
      console.error("Submission error:", error);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in <span className="highlight-touch">touch</span></h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1><span className="lets">Let's </span><span className="talk">talk</span></h1>
            <p>I'm currently available to take on new projects. Feel free to reach out - I'm always open to new projects, creative ideas, or opportunities to collaborate.</p>
            <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="Email icon" /> 
                  <a href="mailto:ashetudesta2023@gmail.com">ashetudesta2023@gmail.com</a>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="Phone icon" /> <p>+251 935564337</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="Location icon" /> <p>Haramaya University, Harar</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
           {showMessage && (
             <div className="success-message">
               <i className="fas fa-check-circle"></i>
               <p>Thank you! Your message has been sent successfully.</p>
             </div>
           )}
           <label htmlFor="name">Your Name</label>
           <input type="text" id="name" placeholder='Enter Your Name' name='name' required/>
           <label htmlFor="email">Your Email</label>
           <input type="email" id="email" placeholder='Enter Your email' name='email' required/>
           <label htmlFor="message">Write your message here</label>
           <textarea id="message" name='message' rows="8" placeholder='Enter your message here' required></textarea>
           <button type='submit' className='contact-submit'>submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
