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
import Footer from '../components/landing/Footer/Footer';
import Ad from '../components/landing/Ad/Ad';
import ImageSlider from '../components/landing/ImageSlider/ImageSlider';
const MainLayout = () => {

  return (
    <div>
      <div>
        <Navbar />
        <Home id="home"/>
        <About  id="about"/>
        <Ad/>
        <Blog  id="blogs"/>
        <Works id="works" />
        <Ad/>
        <Contact id="contact" />
        <Footer/>
      </div>

    </div>
  )
}

export default MainLayout