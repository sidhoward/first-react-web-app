import React from "react";
import Nav from "../components/Nav";
import Contact from "../ui/Contact";
import EmailButton from "../ui/EmailButton";
import SocialList from "../ui/SocialList";

const Shop = ({ mainRight, mainLeft} ) => {
  return (
    <section id="main">
      <div className="bgImageTwo">
        <Nav />
        Shop
        <Contact mainRight={mainRight} mainLeft={mainLeft}/>
        <SocialList/>
        <EmailButton />
      </div>
    </section>
  );
};

export default Shop;
