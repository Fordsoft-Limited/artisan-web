// import React from 'react'

// import './Works.scss'

// const clientSteps = [
//     {
//         number: 1,
//         title: "Select Workman by clicking on the appropriate icon."

//     },
//     {
//         number: 2,
//         title: "Select You Desired Location."
//     },
//     {
//         number: 3,
//         title: "fill our guest form and submit."
//     },
//     {
//         number: 4,
//         title: "access to the inventory of workmen granted"
//     },
//     {
//         number: 5,
//         title: "choose your preferred workman and contact him/her."
//     }


// ]

// const workmanSteps = [
//         {
//             number: 1,
//             title: "fill the workmen form online and submit"
//         },
//         {
//             number: 2,
//             title: "pay registration fee into stipulated bank accounts details."
//         },
//         {
//             number: 3,
//             title: "confirm the payment details to our registration office."
//         },  
//         {
//             number: 4,
//             title: "you will be contacted by our registration officer"
//         }, 
//         {
//             number: 5,
//             title: "your businee details will be uploaded to our website"
//         }

// ]
// const Works = () => {
//     return (
//         <div classNameName="app__works-box">


//             <div classNameName="app__works">
//                 <h2>How It Works</h2>
//             </div>

//             <div classNameName="app__works-box-container">
//                 <div classNameName="app__works-client">
//                     <h2>Prospective Client</h2>

//                     <div classNameName="app__works-how">
//                         {
//                             clientSteps.map((step) => {
//                                 return (
//                                     <div classNameName="app__works-main-box">
//                                         <div classNameName="app__works-digit">{step.number}</div>
//                                         <p classNameName="app__works-steps">{step.title}</p>
//                                     </div>
//                                 )

//                             })
//                         }
//                     </div>


//                 </div>



//                 <div classNameName="app__works-workman">
//                     <h2>Intending Workman</h2>


//                     <div classNameName="app__works-how">
//                             {
//                                 workmanSteps.map((step) =>{
//                                     return (
//                                         <div classNameName="app__works-main-box">
//                                         <div classNameName="app__works-digit">{step.number}</div>
//                                         <p classNameName="app__works-steps">{step.title}</p>
//                                     </div>
//                                     )
//                                 })
//                             }
//                     </div>
//                 </div>




//             </div>
//         </div>
//     )
// }

// export default Works


import React,{useEffect} from 'react'
import './Works.scss'
import client from '../../../assets/images/bg/client.png'
import work from '../../../assets/images/bg/workmen.png'
import Aos from "aos";

import "aos/dist/aos.css";

const Works = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div className="app__works-boxs" id="works">
            <div className="app__works">
                <h2>How It Works</h2>
            </div>

            <div className="app__works-container">
                <div className="app__works-image-box"  data-aos="fade-down-right" data-aos-delay="900">
                    <img src={client} alt="" />
                </div>

                <div className="app__works-box" >
                    <h2>Get Started with Just a Few Clicks as a Client</h2>
                    <div className="app__works-step" data-aos="fade-down-left" data-aos-delay="1000">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">Select Workman by clicking on the appropriate icon.</h4>
                    </div>

                    <div className="app__works-step"   data-aos="fade-down-left" data-aos-delay="1100">
                        <h3 className="app__works-step-number"><i className="bi bi-snow3"></i></h3>
                        <h4 className="app__works-step-title">Select You Desired Location.</h4>
                    </div>
                    <div className="app__works-step"  data-aos="fade-down-left" data-aos-delay="1200">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">fill our guest form and submit.</h4>
                    </div>
                    <div className="app__works-step"  data-aos="fade-down-left" data-aos-delay="1300">
                        <h3 className="app__works-step-number"><i className="bi bi-snow3"></i></h3>
                        <h4 className="app__works-step-title">access to the inventory of workmen granted</h4>
                    </div>
                    <div className="app__works-step"  data-aos="fade-down-left" data-aos-delay="1400">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">choose your preferred workman and contact him/her.</h4>
                    </div>
                </div>
            </div>
                    
            <div className="app__works-button" id="app__btn">
                <button>Click here to get competent <br/> and reliable hands</button>
            </div>
            <div className="app__works-container">
               

                <div className="app__works-box">
                    <h2>Get Started with Just a Few Clicks as a Workmen</h2>
                    <div className="app__works-step" data-aos="fade-down-right" data-aos-delay="900">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">fill the workmen form online and submit.</h4>
                    </div>

                    <div className="app__works-step" data-aos="fade-down-right" data-aos-delay="1000">
                        <h3 className="app__works-step-number"><i className="bi bi-snow3"></i></h3>
                        <h4 className="app__works-step-title">pay registration fee into stipulated bank accounts details.</h4>
                    </div>
                    <div className="app__works-step" data-aos="fade-down-right" data-aos-delay="1100">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">confirm the payment details to our registration office.</h4>
                    </div>
                    <div className="app__works-step" data-aos="fade-down-right" data-aos-delay="1150">
                        <h3 className="app__works-step-number"><i className="bi bi-snow3"></i></h3>
                        <h4 className="app__works-step-title">you will be contacted by our registration officer.</h4>
                    </div>
                    <div className="app__works-step" data-aos="fade-down-right" data-aos-delay="1200">
                        <h3 className="app__works-step-number"><i className="bi bi-snow2"></i></h3>
                        <h4 className="app__works-step-title">your businee details will be uploaded to our website.</h4>
                    </div>
                </div>

                <div className="app__works-image-box" data-aos="fade-down-left" data-aos-delay="1400">
                    <img src={work} alt="" />
                </div>
            </div>

            <div className="app__works-button">
                <button>Click here to get listed</button>
            </div>

        </div>
    )
}

export default Works