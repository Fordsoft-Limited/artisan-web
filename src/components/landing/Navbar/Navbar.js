import React, { useState , useEffect } from 'react'
import Aos from "aos";

import "aos/dist/aos.css";
import logo from '../../../assets/images/logos/art-logo.png';
import './Navbar.scss'
import { Link } from 'react-scroll';



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo"   data-aos="zoom-in-left"  data-aos-delay="150">
                <img src={logo} alt="logo" />
            </div>

            <ul className="app__navbar-links">
                <ul className="app__navbar-links"  data-aos="zoom-in-left" data-aos-delay="300">
                    {['home', 'about', 'blogs', 'works', 'contact'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <div />
                            <Link to={item} smooth={true} duration={500}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </ul>

            <p className="app-slogan"  data-aos="zoom-in-left" data-aos-delay="450">one stop shop for work men</p>

            <div className="app__navbar-menu">
                {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}
                <i class="bi bi-list-nested" onClick={() => setToggle(true)}></i>

                {
                    toggle && (
                        <div >
                            {/* <HiX onClick={() => setToggle(false)} /> */}
                            <i class="bi bi-x" onClick={() => setToggle(false)}></i>
                            <ul data-aos="zoom-in-left" data-aos-delay="500">
                                {['home', 'about', 'works', 'blogs', 'contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={item} onClick={() => setToggle(false)} smooth={true} duration={500}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar