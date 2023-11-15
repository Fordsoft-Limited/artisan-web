import React, { useEffect } from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import about from '../../../assets/images/bg/about-img.jpg'
import './About.scss'
const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="app_about" id="about">
            <section className="app_about-box" >

                <div className="app_about-image" data-aos="fade-down-right" data-aos-delay="800">
                    <img src={about} alt="" />
                </div>

                <div className="app_about-content" data-aos="fade-down-left" data-aos-delay="900">
                    <h3> Building a Community of Skilled Workmen</h3>
                    <p>WorkHUB Limited is a limited liability company, the owner and operator of www.workmenhub.com a comprehensive online directory of pre-qualified artisans and professional workmen across the length and breadth of Nigeria. We offer our workmen enhanced visibility to attract increased patronage, improved workmanship and established long lasting, mutually beneficial business relationship between them and their potential customers.</p>
                    <p>To achieve this goal, we provide periodic professional enhancement programs in form of on-the-job training for listed workmen, easy access to product and processes demonstration sessions and productivity boosting workmen group insurance scheme   </p>
                    <p>Ultimately, we will provide, a more convenient and reliable platform for prospective customer to access and reach any of our listed workmen therefore becoming the destination of choice to hire specialists in auto-mechanics, plumbing, bricklaying, electrical, tailoring, carpentry, catering, welding, horticulture… etc.</p>
                    <p>We are committed to build an online community of workmen in the different industries and sectors of the economy. Our core objective is to connect the general public of prospective clients with listed and prequalified workmen in a seamless manner. In addition, listed workmen will enjoy continuous skills development in the form specific industry news or product information as freebies.</p>
                    {/* <a href="#" className="app_about-btn">read more</a> */}
                </div>

               

            </section>

            <div className="app__about-slogan">
                <div className="app__about-line"></div>
                <p><b>"</b><i>We are committed to provide the general public free access to our comprehensive online directory of competent and reliable workmen in the different areas of human needs. Our goal is to continually add value to the business of our workmen and at the same time provide the general public with free and seamless access to connect with the workmen.</i><b>"</b></p>
                <div className="app__about-line"></div>
            </div>
        </div>
    )
}

export default About