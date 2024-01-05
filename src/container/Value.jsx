import React from 'react'
import values1 from "../assets/img/values-1.png"
import values2 from "../assets/img/values-2.png"
import values3 from "../assets/img/values-3.png"
import "../main"
const Value = () => {
  return (
    <section id="values" className="values">

    <div className="container" data-aos="fade-up">

      <header className="section-header">
        <h2>Our Values</h2>
        <p>He hates to see things and things said</p>
      </header>

      <div className="row">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="box">
            <img src={values1} className="img-fluid" alt=""/>
            <h3>But to desire there is hatred</h3>
            <p>And to pain him. But let him run away from his debts and let him have pleasure. And that is true.</p>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
          <div className="box">
            <img src={values2} className="img-fluid" alt=""/>
            <h3>The pleasure of other pleasures</h3>
            <p>It does not take anything born in distinction to be rejected. And we take pains to let it not be.</p>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
          <div className="box">
            <img src={values3} className="img-fluid" alt=""/>
            <h3>He flees from us with desire.</h3>
            <p>But I will explain what is the matter of life and the troubles are due. Indeed, something of advantage.</p>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Value