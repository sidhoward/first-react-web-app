import React from "react";
import Nav from "../components/Nav";
import Contact from "../ui/Contact";
import EmailButton from "../ui/EmailButton";
import SocialList from "../ui/SocialList";
import Session from "../ui/Session";

const ScheduelSession = ({ mainRight, mainLeft }) => {
  return (
    <section id="main">
      <div className="bgImageTwo">
        <Nav />
        <header className="header__ScheduelSession">
          <Session
            plan={"HEALTHY EATING"}
            discription={<> My name is Ceci and im going to
          <b className="purple"> talk about myself..</b> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Odio magnam necessitatibus
          vitae veritatis eligendi cumque iusto qui repellendus dolore
          facilis.</>}
          />
          <Session
            plan={"BUILD MUSCLE"}
            discription={<> My name is Ceci and im going to
          <b className="purple"> talk about myself..</b> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Odio magnam necessitatibus
          vitae veritatis eligendi cumque iusto qui repellendus dolore
          facilis.</>}
          />
          <Session
            plan={"LOSE WEIGHT"}
            discription={<> My name is Ceci and im going to
          <b className="purple"> talk about myself..</b> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Odio magnam necessitatibus
          vitae veritatis eligendi cumque iusto qui repellendus dolore
          facilis.</>}
          />
          <SocialList />
          <EmailButton />
        </header>
        <Contact mainRight={mainRight} mainLeft={mainLeft} />
      </div>
    </section>
  );
};

export default ScheduelSession;
