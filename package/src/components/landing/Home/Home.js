import React,{useEffect} from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import './Home.scss'
import piler from '../../../assets/images/bg/header.png';
const Home = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        
        <div className="app__header app__flex " id="home">
            {/* <div className="app__header-info">
                Ahmad
            </div> */}

            <div className="app__header-title">
                <div className="app__header-text" data-aos="fade-up" data-aos-delay="200">
                    <h1>WorkmenHub: Connecting Workmen<br/> and Customers with Ease</h1>
                    {/* <p>We are committed to provide the general public free access to  our comprehensive online directory of competent and reliable workmen in the different areas of human needs</p> */}
                </div>
                {/* <div className="app__header-img" data-aos="fade-up" data-aos-delay="250">
                    <img src={piler} alt="" />
                  
                </div> */}
            </div>

        </div>
    )
}

export default Home; 