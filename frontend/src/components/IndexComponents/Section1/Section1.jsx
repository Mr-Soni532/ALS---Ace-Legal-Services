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
        <div className="SecOneLeftButtons" data-aos="fade-up">
          <button className="SecOneBookAppoBtn">Book An Appointment</button>
          <button className="SecOneMeetLawBtn">Meet Our Lawyers</button>
        </div>
        <div>
          <hr style={{ width: "74%" }} /> <br />
          <p style={{ color: "grey" }}>
            Defend your constitutional rights with <br /> right Legal support
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="SecOneRight" data-aos="fade-up">
        <img
          style={{ width: "100%" }}
          src="Images/IndexPageImages/brown_ben3.png"
          alt="Brownben"
        />
      </div>
    </div>
  );
};

export default Section1;
