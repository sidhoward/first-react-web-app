import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Shop = ({ mainRight, mainLeft} ) => {
  return (
    <section id="main">
      <div className="bgImageTwo">
        <Nav />
        Shop
        <Contact mainRight={mainRight} mainLeft={mainLeft}/>
      </div>
    </section>
  );
};

export default Shop;
