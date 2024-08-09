import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { CiMenuBurger } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { CiViewTable } from "react-icons/ci";
import logo from "../../assets/img/Mark-1-removebg-preview.png";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header>
      {/* Sidebar */}
      <nav
        id="sidebarMenu"
        className={`d-lg-block sidebar navbar-light ${
          showSidebar ? "show-sidebar" : ""
        }`}
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <NavLink
              to="/app/dashboard"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              onClick={() => setShowSidebar(false)}
            >
              <span className="fas fa-tachometer-alt fa-fw me-2">
                <MdDashboardCustomize />
              </span>
              <span>Dashboard</span>
            </NavLink>
          </div>
          <div className="list-group list-group-flush mx-3 mt-2">
            <NavLink
              to="/app/tables"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              onClick={() => setShowSidebar(false)}
            >
              <span className="fas fa-tachometer-alt fa-fw me-2">
                <CiViewTable />
              </span>
              <span>Tables</span>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      {/* Navbar */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white  shadow-sm fixed-top"
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-3">
            <button
              data-mdb-button-init
              class="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShowSidebar}
            >
              <CiMenuBurger />
            </button>
            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <img src={logo} height="25" alt="MDB Logo" loading="lazy" />
            </a>
          </div>
          <div className="ms-auto d-flex align-items-center gap-4">
            <div>
              <button
                type="button"
                className="btn btn-transparent position-relative no-outline"
              >
                <FaBell />
                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger badge-adjust">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-transparent no-outline"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <CiMenuKebab />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => navigate("/app/profile")}
                  >
                    <ImProfile /> Profile
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => navigate("/app/settings")}
                  >
                    <IoSettings /> Settings
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => navigate("/auth/login")}
                  >
                    <IoIosLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </header>
  );
};

export default Header;
