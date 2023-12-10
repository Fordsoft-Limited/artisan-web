import React, { useEffect } from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import './Home.scss'
import piler from '../../../assets/images/bg/header.png';
import ImageSlider from '../ImageSlider/ImageSlider';
const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (

        <div className="app__header app__flexs " id="home">
            {/* <div className="app__header-info">
                Ahmad
            </div> */}

            {/* <div className="app__header-title">
                <div className="app__header-text" data-aos="fade-up" data-aos-delay="200">
                    <h1>WorkmenHub: Connecting Workmen<br /> and Customers with Ease</h1>

                </div>

                <div className="app__header-img">
                    <ImageSlider />
                </div>

            </div> */}

            <div className="app__header-text" data-aos="fade-up" data-aos-delay="200">
                <h1>WorkmenHub: Connecting Workmen<br /> and Customers with Ease</h1>

            </div>

            <div className="app__header-img">
                <ImageSlider />
            </div>

        </div>
    )
}

export default Home; 