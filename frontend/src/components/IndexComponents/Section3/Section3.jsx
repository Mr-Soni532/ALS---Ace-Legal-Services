import React from "react";
import "./Section3.css";
const Section3 = () => {
  return (
    <div className="SecThreeParent">
      <div className="SecThreeLeft" data-aos="fade-right">
        <div className="HexaGonalImage">
          <img
            style={{ width: "100%" }}
            src="Images/IndexPageImages/Section3/lawy2.png"
            alt="hexagonalimage"
          />
        </div>
      </div>
      <div className="SecThreeRight" data-aos="fade-left">
        <h1 className="RRResult">Reputation,Respect & Result</h1>
        <div>
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            Most Reputed Lawyers & Attorneys for you
          </p>
          <div className="sec3para">
            Law and justice are very important parts of any society. Be it
            developed or developing, every country has a need for justice,
            fairness and rule of law. A large part of that institution is
            Lawyers who help provide justice to the citizens.{" "}
          </div>
          <br />
          <br />
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            We will for your justice and rights
          </p>

          <div className="sec3para">
            Justice means leaving people alone, to others it means being morally
            correct. Even more people think justice is derived from the
            agreement of most people, and others think justice is fair
            distributions of resources.
          </div>
          <br />
          <br />
          <p>
            <img
              className="hammersec3"
              src="Images/IndexPageImages/Section3/hammer.png"
              alt="xc"
            />
            We provide you both civil and criminal lawyers
          </p>
          <div className="sec3para">
            Law and justice are very important parts of any society. Be it
            developed or developing, A large part of that institution is Lawyers
            who help provide justice to the citizens.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
