import React from 'react'
// import {Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

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
      <div>
          <Outlet />
      </div>


    </>

  )
}

export default MainPage