import React from 'react'
import about from '../../../assets/images/bg/about-img.jpg'
import './About.scss'
const About = () => {
    return (
        <section class="app_about" id="about">

            <div class="app_about-image">
                <img src={about} alt="" />
            </div>

            <div class="app_about-content">
                <h3> Building a Community of Skilled Workmen</h3>
                <p>WorkHUB Limited is a limited liability company, the owner and operator of www.workmenhub.com a comprehensive online directory of pre-qualified artisans and professional workmen across the length and breadth of Nigeria. We offer our workmen enhanced visibility to attract increased patronage, improved workmanship and established long lasting, mutually beneficial business relationship between them and their potential customers.</p>
                <p>To achieve this goal, we provide periodic professional enhancement programs in form of on-the-job training for listed workmen, easy access to product and processes demonstration sessions and productivity boosting workmen group insurance scheme</p>
                <a href="#" class="app_about-btn">read more</a>
            </div>

        </section>
    )
}

export default About