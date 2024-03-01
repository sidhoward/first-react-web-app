import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {" "}
        {/* <!-- CSS div: padding top & bottom (ROW is left & right )-->*/}
        <div className="row footer__row">
          {" "}
          {/* <!-- CSS div: max width: 1100px (container is top & bottom )-->*/}
          <h1 className="personal-logo">
            BRAND <br />
            LOGO
          </h1>
          <div className="footer__social--list">
              <Link exact to= {"/"} className="footer__social--link link__hover-effect link__hover-effect--white">
              About </Link>
              <Link to= {"./scheduelsession"} className="footer__social--link link__hover-effect link__hover-effect--white">
              Schedual A Session </Link>
              <Link to= {"./shop"} className="footer__social--link link__hover-effect link__hover-effect--white">
              Shop </Link>
              <Link to= {"https://www.instagram.com"} className="footer__social--link link__hover-effect link__hover-effect--white">
              Instagram </Link>
          </div>
          <div className="footer__copyright">Copyright © 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
