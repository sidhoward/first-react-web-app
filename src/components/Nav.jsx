import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1 className="personal-logo">
        BRAND <br />
        LOGO
      </h1>
      <ul className="nav__link--list">
        <li className="nav__link">
        <Link exact to= {"/"}  className="nav__link--anchor link__hover-effect">
            About
          </Link>
        </li>
        <li className="nav__link">
          <Link to= {"./scheduelsession"} className="nav__link--anchor link__hover-effect">
            Schedual A Session
          </Link>
        </li>
        <li className="nav__link">
        <Link to= {"./shop"} className="nav__link--anchor link__hover-effect">
            Shop
          </Link>
        </li>
        <li className="nav__link">
        <Link to= {"https://www.instagram.com"} className="nav__link--anchor link__hover-effect">
            Instagram
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
