import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";
import { navlinks } from "./navLinkItems";

export default function Navbar() {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);
  return (
    <nav>
      <h1>Logo</h1>

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
              <i class="fa-solid fa-house"></i>
              {navLink.title}
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
