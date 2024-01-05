import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Aos from "aos";
import "aos/dist/aos.css";
import  portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg"
import  portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg"
import  portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg"
import  portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg"
import  portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg"
import  portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg"
import  portfolio7 from "../../assets/img/portfolio/portfolio-7.jpg"
import  portfolio8 from "../../assets/img/portfolio/portfolio-8.jpg"
import  portfolio9 from "../../assets/img/portfolio/portfolio-9.jpg"



const Advert = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }, []);
    
      useEffect(() => {
        const portfolioContainer = document.querySelector('.portfolio-container');
    
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
        });
    
        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    
        const handleFilterClick = (e) => {
          e.preventDefault();
    
          portfolioFilters.forEach((el) => {
            el.classList.remove('filter-active');
          });
    
          e.target.classList.add('filter-active');
    
          portfolioIsotope.arrange({
            filter: e.target.getAttribute('data-filter'),
          });
        };
    
        portfolioFilters.forEach((filter) => {
          filter.addEventListener('click', handleFilterClick, true);
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          portfolioFilters.forEach((filter) => {
            filter.removeEventListener('click', handleFilterClick, true);
          });
        };
      }, []);
    
      // Initiate portfolio lightbox
      useEffect(() => {
        const portfolioLightbox = GLightbox({
          selector: '.portfolio-lightbox',
        });
      }, []);
  return (
    <section id="portfolio" class="portfolio">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Discover Handcrafted Wonders</h2>
          <p>Support Local Artistic Expression</p>
        </header>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio1} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href={portfolio1} data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio2} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 3"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio3} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 2"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio4} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href={portfolio4} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Card 2"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio5} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href={portfolio5} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 2"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio6} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href={portfolio6} data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 3"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio7} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href={portfolio7} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Card 1"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio8} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href={portfolio8} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Card 3"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio9} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href={portfolio9} data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 3"><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Advert