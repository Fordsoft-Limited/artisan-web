import React from 'react'
import client from "../assets/img/client.png"
import "../main"
const Hero = () => {
 
  return (
    <section id="hero" className="hero d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up"> One Stop Shop For Work Men</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">We offer our workmen enhanced visibility to attract increased patronage, improved workmanship and established long lasting, mutually beneficial business relationship between them and their potential customers.</h2>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-center text-lg-start">
              <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src={client} className="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Hero