import React from 'react'
import feature1 from "../assets/img/features.png"
import feature3 from "../assets/img/features-3.png"
import "../main"
const Feature = () => {
  return (
    <section id="features" class="features">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>How It Works</h2>
          <p>Get Started with Just a Few Clicks as a Client</p>
        </header>

        <div class="row">

          <div class="col-lg-6">
            <img src={feature1} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Select Workman By Clicking On The Appropriate Icon.</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Select You Desired Location.</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Fill Our Guest Form And Submit.</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Access To The Inventory Of Workmen Granted</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Choose Your Preferred Workman And Contact Him/Her.</h3>
                </div>
              </div>

              

            </div>
          </div>

        </div> 



      
        <div class="row feature-icons" data-aos="fade-up">
          <h3>Get Started with Just a Few Clicks as a Workmen</h3>

          <div class="row">

            <div class="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
              <img src={feature3} class="img-fluid p-4" alt=""/>
            </div>

            <div class="col-xl-8 d-flex content">
              <div class="row align-self-center gy-4">

                <div class="col-md-6 icon-box" data-aos="fade-up">
                  <i class="ri-chat-forward-line"></i>
                  <div>
                    <h4>Fill The Workmen Form Online And Submit</h4>
                   
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i class="ri-bank-card-line"></i>
                  <div>
                    <h4>Pay Registration Fee Into Stipulated Bank Accounts Details.</h4>
                   
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i class="ri-secure-payment-fill"></i>
                  <div>
                    <h4>Confirm The Payment Details To Our Registration Office.</h4>
                   
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i class="ri-contacts-line"></i>
                  <div>
                    <h4>You Will Be Contacted By Our Registration Officer.</h4>
                   
                  </div>
                </div>

                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i class="ri-shake-hands-line"></i>
                  <div>
                    <h4>Your Businee Details Will Be Uploaded To Our Website.</h4>
                   
                  </div>
                </div>

               

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Feature