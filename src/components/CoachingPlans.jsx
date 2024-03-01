import React from "react";
import CoachingPlan from "../ui/CoachingPlan";

const CoachingPlans = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="coaching__plans--wrapper">
            <h1 className="coaching__plans">Training Plan Fit For You!</h1>
            <div className="number__list">
              <CoachingPlan
                link={"https://www.instagram.com"}
                planNum={1}
                plan={"HEALTHY EATING"}
              />
              <CoachingPlan
                link={"https://www.instagram.com"}
                planNum={2}
                plan={"BUILD MUSCLE"}
              />
              <CoachingPlan
                link={"https://www.instagram.com"}
                planNum={3}
                plan={"LOSE WEIGHT"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingPlans;

{
  /*<!-- <div className="number__box"> -->
  <!-- <div className="box"><h2 className="box__plan box__plan--shape">LOSE WEIGHT</h2></div>
  <div className="box"><h2 className="box__plan box__plan--shape">BUILD MUSCLE</h2></div> -->
  <!-- <div className="box"><h2 className="box__plan box__plan--shape">HEALTHY EATING</h2></div> -->
  <!-- </div> -->*/
}
