import React from 'react'
import Logo from "../assets/img/art-logo.png"
import "../main"
const Navbar = () => {
  return (
  //   <header id="header" classNameName="header fixed-top">
  //   <div classNameName="container-fluid container-xl d-flex align-items-center justify-content-between">

  //   <a href="index.html" classNameName="logo d-flex align-items-center">
  //         <img src={Logo} alt="" />
  //       </a>

  //     <nav id="navbar" classNameName="navbar">
  //       <ul>
  //         <li><a classNameName="nav-link scrollto active" href="#hero">Home</a></li>
  //         <li><a classNameName="nav-link scrollto" href="#about">About</a></li>
  //         <li><a classNameName="nav-link scrollto" href="#services">Services</a></li>
  //         <li><a classNameName="nav-link scrollto" href="#portfolio">Portfolio</a></li>
  //         <li><a classNameName="nav-link scrollto" href="#team">Team</a></li>
  //         <li><a href="blog.html">Blog</a></li>
         

       

  //         <li><a classNameName="nav-link scrollto" href="#contact">Contact</a></li>
  //         <li><a classNameName="getstarted scrollto" href="#about">Get Started</a></li>
  //       </ul>
  //       <i classNameName="bi bi-list mobile-nav-toggle"></i>
  //     </nav>

  //   </div>
  // </header>

  <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src={Logo} alt=""/>
       
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
         

       

          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
  )
}

export default Navbar