import React from "react";
import Nav from "../components/Nav";
import Contact from "../components/Contact";

const ScheduelSession = ({ mainRight, mainLeft }) => {
  return (
    <section id="main">
      <div className="bgImageTwo">
        <Nav />
        ScheduelSession
        <Contact mainRight={mainRight} mainLeft={mainLeft}/>
      </div>
    </section>
  );
};

export default ScheduelSession;
