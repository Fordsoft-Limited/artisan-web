import React, { useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import testimonial1 from "../../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../../assets/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../../assets/img/testimonials/testimonials-5.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Artisan = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Artisan</h2>
          <p>What they are saying about us</p>
        </header>

        <div
          class="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="swiper-wrapper">
            <Swiper
              speed={600}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={"auto"}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 40 },
                1200: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    For the target group, the result is worth taking care of
                    until the airline takes over. The accusers, however, need
                    that, and need some discipline. Some faintness, but always a
                    smile.
                  </p>
                  <div class="profile mt-auto">
                    <img src={testimonial1} class="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Export time, however, I was for the evils of the evils that
                    I was going to be angry with the effort that I was going to
                    be the one who was the one who was going to be the one who
                    wanted to be.
                  </p>
                  <div class="profile mt-auto">
                    <img src={testimonial2} class="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    For if I did not export a hair from your house, which are
                    great, none of which I would bring to your house for a short
                    time, I would have been my home, or I would have been the
                    smallest.
                  </p>
                  <div class="profile mt-auto">
                    <img src={testimonial3} class="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    For I was fleeing from the pain of pain, there is no fault
                    in the export of many.
                  </p>
                  <div class="profile mt-auto">
                    <img src={testimonial4} class="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>Who are some of them whom I will read?</p>
                  <div class="profile mt-auto">
                    <img src={testimonial5} class="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Artisan;
