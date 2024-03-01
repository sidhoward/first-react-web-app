import React from "react";
import SocialList from "../ui/SocialList";






const Header = ({IFBBPro}) => {
  return (
    <header className="header">
      <div className="header__about">
        <h1 className="header__title">BE THE BEST!</h1>
        <h2 className="header__intro purple">
          Work hard to be the best version of yourself
        </h2>
        <p className="header_para">
          My name is Ceci and im going to
          <b className="purple"> talk about myself..</b> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odio magnam necessitatibus vitae
          veritatis eligendi cumque iusto qui repellendus dolore facilis.
        </p>
        <SocialList/>
        <div className="header__img">
          <img className="header__img" src={IFBBPro} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
