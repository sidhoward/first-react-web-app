import React from "react";

const Session = ({ plan, discription }) => {
  return (
    <div className="header__plans">
      <h1 className="header__title--ScheduelSession ScheduelSession__shape">
        {plan}
      </h1>
      <p className="header_para">{discription}</p>
    </div>
  );
};

export default Session;
