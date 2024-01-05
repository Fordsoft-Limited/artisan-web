
import React, { useEffect, useState } from 'react';
import Logo from "../../assets/img/art-logo.png"
const Navbar = () => {
  const [navbarlinks, setNavbarlinks] = useState([]);
  const [selectHeader, setSelectHeader] = useState(null);
//   const [backtotop, setBacktotop] = useState(null);



  const mobileNavToggle = (e) => {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('#navbar').classList.toggle('navbar-mobile');
    e.target.classList.toggle('bi-list');
    e.target.classList.toggle('bi-x');
  };

  useEffect(() => {
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const select = (selector, all = false) => {
      return all ? document.querySelectorAll(selector) : document.querySelector(selector);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    const scrollto = (el) => {
      let header = select('#header');
      let offset = header.offsetHeight;

      if (!header.classList.contains('header-scrolled')) {
        offset -= 10;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth',
      });
    };

    // const headerScrolled = () => {
    //   if (window.scrollY > 100) {
    //     selectHeader.classList.add('header-scrolled');
    //   } else {
    //     selectHeader.classList.remove('header-scrolled');
    //   }
    // };

    // const toggleBacktotop = () => {
    //   if (window.scrollY > 100) {
    //     backtotop.classList.add('active');
    //   } else {
    //     backtotop.classList.remove('active');
    //   }
    // };

    

    // const mobileNavDropdownsActivate = (e) => {
    //   if (select('#navbar').classList.contains('navbar-mobile')) {
    //     e.preventDefault();
    //     e.target.nextElementSibling.classList.toggle('dropdown-active');
    //   }
    // };

    // const scrollWithOffset = (e) => {
    //   if (select(e.target.hash)) {
    //     e.preventDefault();

    //     let navbar = select('#navbar');
    //     if (navbar.classList.contains('navbar-mobile')) {
    //       navbar.classList.remove('navbar-mobile');
    //       let navbarToggle = select('.mobile-nav-toggle');
    //       navbarToggle.classList.toggle('bi-list');
    //       navbarToggle.classList.toggle('bi-x');
    //     }
    //     scrollto(e.target.hash);
    //   }
    // };

    const scrollOnLoad = () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    };

    setNavbarlinks(select('#navbar .scrollto', true));
    setSelectHeader(select('#header'));
    // setBacktotop(select('.back-to-top'));

    window.addEventListener('load', () => {
      navbarlinksActive();
    //   headerScrolled();
    //   toggleBacktotop();
      scrollOnLoad();
     
    });

    onscroll(document, () => {
      navbarlinksActive();
    //   headerScrolled();
    //   toggleBacktotop();
    });
  }, [navbarlinks, selectHeader]);

  return (
  
     <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={Logo} alt="" />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={mobileNavToggle}></i>
        </nav>
      </div>
    </header>
    
  );
};

export default Navbar;
