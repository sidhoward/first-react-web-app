import React from "react";
import LandingPage from "../components/LandingPage";
import Main from "../components/Main";

const Home = ({ IFBBPro, mainRight, mainLeft }) => {
  return (
    <>
      <LandingPage IFBBPro={IFBBPro} />
      <Main mainRight={mainRight} mainLeft={mainLeft} />
    </>
  );
};

export default Home;
