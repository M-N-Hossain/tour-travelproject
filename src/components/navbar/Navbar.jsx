import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";
import { navlinks } from "./navLinkItems";

import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <div
        className="burgerMenuIcons"
        onClick={() => {
          setIsMenuIconShowing(!isMenuIconShowing);
        }}
      >
        <i className={isMenuIconShowing ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isMenuIconShowing ? "navMenu active" : "navMenu"}>
        {navlinks.map((navLink, index) => (
          <li key={index}>
            <Link className={navLink.cName} to={navLink.url}>
              <i class={navLink.icon}></i>
              {navLink.title}
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
