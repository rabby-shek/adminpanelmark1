import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Features",
      path: "/features",
    },
    {
      id: 4,
      title: "Pricing",
      path: "/pricing",
    },
    {
      id: 5,
      title: "Login",
      path: "/login",
    },
    {
      id: 6,
      title: "Sign Up",
      path: "/sign-up",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mark-1
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex justify-content-end align-items-end" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            {navItems.map((item) => {
              return (
                <li key={item.id} className="nav-item">
                  <Link className="nav-link" aria-current="page" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
