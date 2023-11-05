import React from 'react'
// import { Container } from "reactstrap";
// import { Outlet } from "react-router-dom";
import Header from "./Header";
// import {Link, useLocation } from "react-router-dom"

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
        <Header />
        </div>
        {/* <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container> */}
    </div>
  )
}

export default MainLayout