import React from 'react'
import about from "../assets/img/about.jpg"
import "../main"
const About = () => {
  return (
    <section id="about" className="about">

      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>Workhub Limited enhances workmen visibility, connecting customers with skilled artisans, offering training, product demos, and insurance, fostering lasting business relationships.</h2>
              <p>
                To achieve this goal, we provide periodic professional enhancement programs in form of on-the-job training for listed workmen, easy access to product and processes demonstration sessions and productivity boosting workmen group insurance scheme.
              </p>
              <div className="text-center text-lg-start">
                <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src={about} className="img-fluid" alt=""/>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About