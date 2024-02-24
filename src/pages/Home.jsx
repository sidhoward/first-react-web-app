import React from "react";
import LandingPage from "../landingPage/LandingPage";
import Main from "../main/Main";

const Home = ({ IFBBPro, mainRight, mainLeft }) => {
  return (
    <>
      <LandingPage IFBBPro={IFBBPro} />
      <Main mainRight={mainRight} mainLeft={mainLeft} />
    </>
  );
};

export default Home;
