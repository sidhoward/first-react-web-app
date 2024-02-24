import React from "react";

const CoachingPlans = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="coaching__plans--wrapper">
          <h1 className="coaching__plans">Training Plan Fit For You!</h1>
          <div className="number__list">
            <a href="https://google.com" target="_blank">
              <h1 className="number">1</h1>
              <div className="number__box">
                <div className="box">
                  <h2 className="box__plan box__plan--shape">HEALTHY EATING</h2>
                </div>
              </div>
            </a>
            <a href="https://google.com" target="_blank">
              <h1 className="number">2</h1>
              <div className="number__box">
                <div className="box">
                  <h2 className="box__plan box__plan--shape">HEALTHY EATING</h2>
                </div>
              </div>
            </a>
            <a href="https://google.com" target="_blank">
              <h1 className="number">3</h1>

              <div className="number__box">
                <div className="box">
                  <h2 className="box__plan box__plan--shape">HEALTHY EATING</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
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
