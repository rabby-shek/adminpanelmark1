import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/Mark-1-removebg-preview.png"
const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "#home",
    },
    {
      id: 2,
      title: "About",
      path: "#about",
    },
    {
      id: 3,
      title: "Features",
      path: "#features",
    },
    {
      id: 4,
      title: "Pricing",
      path: "#pricing",
    },
    {
      id: 5,
      title: "Contact",
      path: "#contact",
    },
    {
      id: 6,
      title: "Login",
      path: "/auth/login",
    },
    {
      id: 7,
      title: "Sign Up",
      path: "/auth/sign-up",
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(location.hash.slice(1));
    } else {
      setActiveSection("");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => (item.path.startsWith("#") ? item.path.slice(1) : null))
        .filter(Boolean);
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 50) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm position-fixed w-100 bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
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
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            {navItems.map((item) => {
              const isActive = item.path === `#${activeSection}`;
              return (
                <li key={item.id} className="nav-item">
                  <Link
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current="page"
                    to={item.path}
                  >
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
