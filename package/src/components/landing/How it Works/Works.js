import React from 'react'

import './Works.scss'

const clientSteps = [
    {
        number: 1,
        title: "Select Workman by clicking on the appropriate icon."

    },
    {
        number: 2,
        title: "Select You Desired Location."
    },
    {
        number: 3,
        title: "fill our guest form and submit."
    },
    {
        number: 4,
        title: "access to the inventory of workmen granted"
    },
    {
        number: 5,
        title: "choose your preferred workman and contact him/her."
    }


]

const workmanSteps = [
        {
            number: 1,
            title: "fill the workmen form online and submit"
        },
        {
            number: 2,
            title: "pay registration fee into stipulated bank accounts details."
        },
        {
            number: 3,
            title: "confirm the payment details to our registration office."
        },
        {
            number: 4,
            title: "you will be contacted by our registration officer"
        }, 
        {
            number: 5,
            title: "your businee details will be uploaded to our website"
        }

]
const Works = () => {
    return (
        <div className="app__works-box">
            <div className="app__works">
                <h2>How It Works</h2>
            </div>

            <div className="app__works-box-container">
                <div className="app__works-client">
                    <h2>Prospective Client</h2>

                    <div className="app__works-how">
                        {
                            clientSteps.map((step) => {
                                return (
                                    <div className="app__works-main-box">
                                        <div className="app__works-digit">{step.number}</div>
                                        <p className="app__works-steps">{step.title}</p>
                                    </div>
                                )

                            })
                        }
                    </div>


                </div>



                <div className="app__works-workman">
                    <h2>Intending Workman</h2>


                    <div className="app__works-how">
                            {
                                workmanSteps.map((step) =>{
                                    return (
                                        <div className="app__works-main-box">
                                        <div className="app__works-digit">{step.number}</div>
                                        <p className="app__works-steps">{step.title}</p>
                                    </div>
                                    )
                                })
                            }
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Works