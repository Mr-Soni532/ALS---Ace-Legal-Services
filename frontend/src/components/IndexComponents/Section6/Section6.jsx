import React from "react";
import "./Section6.css";

import NumBumCard from "./NumBumCard";

const Section6 = () => {
  return (
    <div className="SecSixParent">
      <div className="SecSixLeft">
        <h1>
          {" "}
          80 years of Experience <br /> in Legal Solutions.
        </h1>
      </div>
      <div className="SecSixRight">
        <NumBumCard />
        <NumBumCard />
        <NumBumCard />
        <NumBumCard />
      </div>
    </div>
  );
};

export default Section6;
