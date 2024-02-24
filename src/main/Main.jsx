import React from "react";
import CoachingPlans from "../components/CoachingPlans";
import Contact from "../components/Contact";

const Main = ({mainRight, mainLeft}) => {
  return (
    <section id="main">
      <div className="bgImageTwo">
        <CoachingPlans />
        <Contact mainRight={mainRight} mainLeft={mainLeft}/>
      </div>
    </section>
  );
};

export default Main;
