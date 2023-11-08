import React, { useState } from 'react'

import logo from '../../../assets/images/logos/xtremelogo.svg'
import './Navbar.scss'




const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo" />
            </div>

            <ul className="app__navbar-links">
                <ul className="app__navbar-links">
                    {['home', 'about', 'blogs', 'how it works', 'contact'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </ul>

            <p className="app-slogan">one stop shop for work men</p>

            <div className="app__navbar-menu">
                {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}
                <i class="bi bi-list-nested" onClick={() => setToggle(true)}></i>

                {
                    toggle && (
                        <div >
                            {/* <HiX onClick={() => setToggle(false)} /> */}
                            <i class="bi bi-x" onClick={() => setToggle(false)}></i>
                            <ul >
                                {['home', 'about', 'works', 'skills', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
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