import React,{useEffect} from 'react';
import Aos from "aos";

import "aos/dist/aos.css";


import './Ad.scss'
const Ad = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div class="app__ad">
            <div class="app__ad-box" >
                <div class="ad is-left" data-aos="fade-down-right" data-aos-duration="3000">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/255716/728x90%402-left.png" alt="728x90" />
                </div>
                {/* <div class="ad is-center">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/255716/728x90%402-center.png" alt="728x90" />
                </div>
                <div class="ad is-right">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/255716/728x90%402-right.png" alt="728x90" />
                </div> */}
            </div>
        </div>
    )
}

export default Ad