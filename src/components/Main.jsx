import React from "react";
import CoachingPlans from "./CoachingPlans";
import Contact from "../ui/Contact";

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
