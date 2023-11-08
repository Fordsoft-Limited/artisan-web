import React from 'react';

import './Home.scss'
import piler from '../../../assets/images/bg/header.png';
const Home = () => {
    return (
        <div className="app__header app__flex " id="home">
            {/* <div className="app__header-info">
                Ahmad
            </div> */}

            <div className="app__header-title">
                <div className="app__header-text">
                    <h1>WorkmenHub: Connecting Workmen and Customers with Ease</h1>
                    <p>We are committed to provide the general public free access to our comprehensive online directory of competent and reliable workmen in the different areas of human needs</p>
                </div>
                <div className="app__header-img">
                    <img src={piler} alt="" />
                    {/* <p>ahmad</p> */}
                </div>
            </div>

        </div>
    )
}

export default Home; 