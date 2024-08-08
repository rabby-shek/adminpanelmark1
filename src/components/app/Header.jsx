import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { CiMenuBurger } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { CiViewTable } from "react-icons/ci";
const Header = () => {
    const navigate = useNavigate();
  return (
    <header>
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse navbar-light  shadow-sm"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <NavLink
                to="/app/dashboard"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
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
              >
                <CiMenuBurger />
              </button>
              {/* <!-- Brand --> */}
              <a className="navbar-brand" href="#">
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="25"
                  alt="MDB Logo"
                  loading="lazy"
                /> */}
                <h5>Mark - 1</h5>
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
                    <button className="dropdown-item" type="button">
                      <ImProfile /> Profile
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      <IoSettings /> Settings
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => navigate("/auth/login")}>
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
  )
}

export default Header;
