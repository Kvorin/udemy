import Wrapper from "../assets/wrappers/Navbar";

import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import { GiHamburgerMenu } from "react-icons/gi";

//react
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
//links
import links from "../utils/links";
//images & logos
import logo from "../assets/images/main-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [check, setCheck] = useState(false);
  console.log(check);

  return (
    <Wrapper>
      {/* <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
          <Link to="/tutorials">Tutorials</Link>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={logoutUser} className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div> */}
      {/* <Link to="/tutorials">Tutorials</Link> */}
      <nav className="navbar-items">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-icon">
          <button
            className="menu"
            onClick={() => setCheck((prevCheck) => !prevCheck)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className={check ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => {
            const { text, path, id, cName } = link;

            return (
              <li key={id}>
                <Link to={link.path} className={link.cName}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button onClick={logoutUser} className="dropdown-btn btn">
            logout
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
