import React from "react";
import "./Section6.css";

import NumBumCard from "./NumBumCard";

const Section6 = () => {
  return (
    <div className="SectionSix">
      <h1 className="AboutHead">About</h1>
      <div className="SecSixParent">
        <div className="SecSixLeft">
          <h1 style={{ fontSize: "47px" }}>
            <label style={{ color: "#ffd41f", fontSize: "49px" }}>
              80 years
            </label>{" "}
            <br /> of Experience <br /> in Legal Solutions.
          </h1>
        </div>
        <div className="SecSixRight">
          <NumBumCard
            number="700"
            head="Honors & Awards"
            text="Separated they live in 
Bookmarks grove is right
at the coast of the Semantics."
            delay="50"
          />
          <NumBumCard
            number="2100"
            head="Qualified Lawyers"
            text="Who help you to fight your cases
with utmost diligence and also
provide legal support"
            delay="100"
          />
          <NumBumCard
            number="1200"
            head="Successful Cases"
            text="That made peoples life better 
and engraved our mark in 
society's betterment"
            delay="150"
          />
          <NumBumCard
            number="2700"
            head="Happy Clients"
            text="Clients are top most priority
for us, it motivates us when we
see them smile."
            delay="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
