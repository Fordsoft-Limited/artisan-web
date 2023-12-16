import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Visitors",
    href: "/visitor",
    icon: "bi bi-bell",
  },
  {
    title: "Artisan",
    href: "/artisan",
    icon: "bi bi-patch-check",
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-card-text",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "bi bi-columns",
  },
  {
    title: "Advertisement ",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    // title: "Main",
    href: "/landing"
  }
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  if (location.pathname === "/main") {
    return <Link  to="/main"
    className={
      location.pathname === "/main"
        ? "text-primary nav-link py-3"
        : "nav-link text-secondary py-3"
    } />;
  }



  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
