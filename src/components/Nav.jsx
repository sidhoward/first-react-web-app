import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1 className="personal-logo">
        BRAND <br />
        LOGO
      </h1>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a href="#" className="nav__link--anchor link__hover-effect">
            About
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="nav__link--anchor link__hover-effect">
            Schedual A Session
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="nav__link--anchor link__hover-effect">
            Shop
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="nav__link--anchor link__hover-effect">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
