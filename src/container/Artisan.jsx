import React from 'react'
import "../main"
import testimonial1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../assets/img/testimonials/testimonials-5.jpg";
const Artisan = () => {
  return (
    <section id="testimonials" className="testimonials">

    <div className="container" data-aos="fade-up">

      <header className="section-header">
        <h2>Artisan</h2>
        <p>What they are saying about us</p>
      </header>

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                For the target group, the result is worth taking care of until the airline takes over. The accusers, however, need that, and need some discipline. Some faintness, but always a smile.
              </p>
              <div className="profile mt-auto">
                <img src={testimonial1} className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                Export time, however, I was for the evils of the evils that I was going to be angry with the effort that I was going to be the one who was the one who was going to be the one who wanted to be.
              </p>
              <div className="profile mt-auto">
                <img src={testimonial2} className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                For if I did not export a hair from your house, which are great, none of which I would bring to your house for a short time, I would have been my home, or I would have been the smallest.
              </p>
              <div className="profile mt-auto">
                <img src={testimonial3} className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                For I was fleeing from the pain of pain, there is no fault in the export of many.
              </p>
              <div className="profile mt-auto">
                <img src={testimonial4} className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                Who are some of them whom I will read?
              </p>
              <div className="profile mt-auto">
                <img src={testimonial5} className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>

  </section>
  )
}

export default Artisan