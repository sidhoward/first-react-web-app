import React from "react";

const CoachingPlan = ({ link, planNum, plan }) => {
  return (
    <>
      <a href={link} target="_blank">
        <h1 class="number">{planNum}</h1>
        <div class="number__box">
          <div class="box">
            <h2 class="box__plan box__plan--shape">{plan}</h2>
          </div>
        </div>
      </a>
    </>
  );
};

export default CoachingPlan;
