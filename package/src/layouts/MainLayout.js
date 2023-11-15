import React from 'react'
// import { Container } from "reactstrap";
// import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from '../components/landing/Navbar/Navbar';
import Home from '../components/landing/Home/Home'
import About from '../components/landing/About/About';
import Blog from '../components/landing/Blog/Blog';
// import {Link, useLocation } from "react-router-dom"
import Works from '../components/landing/How it Works/Works';
import Contact from '../components/landing/Contact/Contact';
import Blogs from '../components/landing/Blogs/Blogs'
const MainLayout = () => {

  return (
    <div>
      <div>
        <Navbar />
        <Home id="home"/>
        <About  id="about"/>
        <Blog  id="blogs"/>
        <Works id="works" />
        <Contact id="contact" />

      </div>

    </div>
  )
}

export default MainLayout