import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import EmailButton from "../components/EmailButton";

const LandingPage = ({ IFBBPro, mainRight, mainLeft }) => {
  return (
    <section id="landing-page">
      <div className="bgImage">
        <Nav />
        <Header IFBBPro={IFBBPro} mainRight={mainRight} mainLeft={mainLeft} />
        <EmailButton />
        <div className="modal WORK ON THIS LATER..."></div>
      </div>
    </section>
  );
};

export default LandingPage;
