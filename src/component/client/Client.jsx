import React, { useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import client1 from "../../assets/img/clients/client-1.png"
import client2 from "../../assets/img/clients/client-2.png"
import client3 from "../../assets/img/clients/client-3.png"
import client4 from "../../assets/img/clients/client-4.png"
import client5 from "../../assets/img/clients/client-5.png"
import client6 from "../../assets/img/clients/client-6.png"
import client7 from "../../assets/img/clients/client-7.png"
import client8 from "../../assets/img/clients/client-8.png"
import "./Client.css"
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Client = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="clients" class="clients">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Our Sponsors</h2>
          <p>All services at times</p>
        </header>
        <div class="clients-slider swiper">
          <div class="swiper-wrapper flex align-items-center">
            <Swiper
              speed={400}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={"auto"}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 40 },
                480: { slidesPerView: 3, spaceBetween: 60 },
                640: { slidesPerView: 4, spaceBetween: 80 },
                992: { slidesPerView: 6, spaceBetween: 120 },
              }}
            >
              <SwiperSlide className="swiper-slide">
                <img
                  src={client1}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client2}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client3}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client4}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client5}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client6}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client7}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide">
                <img
                  src={client8}
                  className="img-fluid"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Client;
