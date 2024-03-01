import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailButton = () => {
  return (
    <button className="mail__btn click">
      <FontAwesomeIcon icon="fa-envelope" />
    </button>
  );
};

export default EmailButton;
