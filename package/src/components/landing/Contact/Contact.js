import React from 'react'

import email from '../../../assets/images/bg/email.png'

import mobile from '../../../assets/images/bg/mobile.png'

import './Contact.scss'

const Contact = () => {
  return (
    <div className="app__contact  app__flex" id="contact">

      <h2>Contact Us</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={email} alt="email" />
          <a href="mailto:workman@gmail.com" className="p-text">workman@gmail.com</a>
        </div>

        <div className="app__contact-card">
          <img src={mobile} alt="mobile" />
          <a href="tel:+2348105828182" className="p-text">+2348105828182</a>
        </div>
      </div>

      <div className="app__contact-socials">
        <div className="app__contact-social">
          <i className="bi bi-facebook"></i>
        </div>

        <div className="app__contact-social">

          <i className="bi bi-twitter"></i>
        </div>
        <div className="app__contact-social">

          <i className="bi bi-linkedin"></i>
        </div>


      </div>


      <div className="app__contact-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" />
        </div>

        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" />
        </div>

        <div>
          <textarea className="p-text" placeholder="Your Message " ></textarea>
        </div>
        <button type="button" className="p-text" >Send</button>
      </div>

    </div>
  )
}

export default Contact