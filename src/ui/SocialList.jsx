import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialList = () => {
  return (
    <div className="social__list">
      <a
        href="https:ADD INSTAGRAM HERE"
        target="_blank"
        className="social__link click"
      >
        {" "}
        <FontAwesomeIcon icon="fa-instagram" />
        {/* <i  *** DELETE AFTER *** className="fab fa-instagram"></i> */}
      </a>
      <a
        href="https:ADD EMAIL HERE"
        target="_blank"
        className="social__link click"
      >
        {" "}
        <FontAwesomeIcon icon="fa-instagram" />
        {/* *** DELETE AFTER *** <i className="fab fa-facebook"></i> */}
      </a>
    </div>
  );
};

export default SocialList;
