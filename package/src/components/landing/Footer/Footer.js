import React,{useEffect} from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import "./Footer.scss"
import logo from '../../../assets/images/logos/art-logo.png';
const Footer = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div class="footer-box">
        <footer class="footer section bd-container" >
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <img src={logo} className="footer-img"  data-aos="fade-up" data-aos-delay="900"/>
                    <a href="#" class="footer__logo"  data-aos="fade-up" data-aos-delay="1000">WorkmenHub</a>
                    <span class="footer__description"  data-aos="fade-up" data-aos-delay="1100">Professional</span>
                    <div>
                        <a href="#" class="footer__social"  data-aos="fade-up" data-aos-delay="1200"><i class='bi bi-facebook'></i></a>
                        <a href="#" class="footer__social"  data-aos="fade-up" data-aos-delay="1400"><i class='bi bi-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bi bi-twitter'  data-aos="fade-up" data-aos-delay="1300"></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title"  data-aos="fade-up" data-aos-delay="900">Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1100">Customer</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1000">Pricing</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1200">Workmen</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1100">Reserve your spot</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title"  data-aos="fade-up" data-aos-delay="900">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1100">Event</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1200">Contact us</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1000">Privacy policy</a></li>
                        <li><a href="#" class="footer__link"  data-aos="fade-up" data-aos-delay="1200">Terms of services</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title"  data-aos="fade-up" data-aos-delay="900">Adress</h3>
                    <ul>
                        <li  data-aos="fade-up" data-aos-delay="1000">Nigeria - Lagos</li>
                        <li  data-aos="fade-up" data-aos-delay="1200">Jr Union #999</li>
                        <li  data-aos="fade-up" data-aos-delay="1100">+234 8105 754 234</li>
                        <li  data-aos="fade-up" data-aos-delay="1300">workmenhub@email.com</li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy"  >&#169; 2023 WorkmenHub. All right reserved</p>
        </footer>
    </div>
  )
}

export default Footer