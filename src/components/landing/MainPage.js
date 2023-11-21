import React from 'react'
// import {Link, useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { Container } from "reactstrap";
// import { Container } from "reactstrap";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Navbar from '../landing/Navbar/Navbar';
import Home from '../landing/Home/Home'
import About from '../landing/About/About';
import Blog from '../landing/Blog/Blog';
// import {Link, useLocation } from "react-router-dom"
import Works from '../landing/How it Works/Works';
import Contact from '../landing/Contact/Contact';
// import Blogs from '../landing/Blogs/Blogs'

const MainPage = () => {
  // const location = useLocation();

  // if (location.pathname === "/main") {
  //   return <Link  to="/main"
  //   className={
  //     location.pathname === "/main"
  //       ? "text-primary nav-link py-3"
  //       : "nav-link text-secondary py-3"
  //   } />;
  // }
  return (
    <>
      {/* <div>
          <Outlet />
      </div> */}
      <div>
        <Navbar />
        <Home id="home" />
        <About id="about" />
        <Blog id="blogs" />
        <Works id="works" />
        <Contact id="contact" />

      </div>


    </>

  )
}

export default MainPage