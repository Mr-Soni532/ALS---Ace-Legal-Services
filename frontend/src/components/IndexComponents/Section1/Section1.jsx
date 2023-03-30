import React from "react";
import "./Section1.css";
const Section1 = () => {
  return (
    <div className="SecOneParent">
      <div className="SecOneLeft" data-aos="fade-up">
        <h1 className="highQualityLaw">
          High-Quality Law <br /> Advice & Support.
        </h1>
        <br />
        <br />
        <div className="SecOneLeftButtons">
          <button className="SecOneBookAppoBtn">Book An Appointment</button>
          <button className="SecOneMeetLawBtn">Meet Our Lawyers</button>
        </div>
        <div>
          <p>
            Defend your constitutional rights with <br /> right Legal support
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="SecOneRight" data-aos="fade-up">
        <img
          style={{ width: "100%" }}
          src={require("../../../assets/IndexPageImages/brown_ben3.png")}
          alt="Brownben"
        />
      </div>
    </div>
  );
};

export default Section1;
