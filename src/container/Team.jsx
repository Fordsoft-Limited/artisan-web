import React from 'react'
import '../main'
import team1 from "../assets/img/team/team-1.jpg"
import team2 from "../assets/img/team/team-2.jpg"
import team3 from "../assets/img/team/team-3.jpg"
import team4 from "../assets/img/team/team-4.jpg"
const Team = () => {
  return (
    <section id="team" className="team">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Team</h2>
          <p>Our hard working team</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src={team1} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>He wants or because he runs away and and. The pleasure or the time of the pains itself is held either. Exercising itself with the right minimum of physical and pleasure.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src={team2} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Where to be repulsed because that It is him and his accusers who flees and takes no small part of his body. But with pleasure, which neither the mind nor the wise rejects.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src={team3} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>In fact, everyone will have a consequence. Happiness will be pursued by those who leave trouble. For pleasures, or the architect, are further asperated by the manner of trouble.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>The pleasure of things does not gain distinction of mind and abandons the pleasure of the heart. Because or something and pain so that we can perform the tasks.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Team