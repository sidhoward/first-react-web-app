import React from "react";

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
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              About
            </a>
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Schedual A Session
            </a>
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Shop
            </a>
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Instagram
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
