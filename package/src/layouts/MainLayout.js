import React from 'react'
// import { Container } from "reactstrap";
// import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from '../components/landing/Navbar/Navbar';
import Home  from '../components/landing/Home/Home'
import About from '../components/landing/About/About';
import Blog from '../components/landing/Blog/Blog';
// import {Link, useLocation } from "react-router-dom"
import Works from '../components/landing/How it Works/Works';
import Contact from '../components/landing/Contact/Contact';

const MainLayout = () => {
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
    <div>
        <div>
        <Navbar />
        <Home/>
        <About/>
        <Blog/>
        <Works/>
        <Contact/>
        </div>
        {/* <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container> */}
    </div>
  )
}

export default MainLayout