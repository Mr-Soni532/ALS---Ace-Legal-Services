import React from "react";
import "./Section2.css";
const Section1 = () => {
  return (
    <section className="SecTwoParent">
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">
        Seach for best lawyers in your Proximity.
      </h1>
      <br />
      <input
        className="BigSearchBar"
        type="text"
        placeholder="Select Your City"
      />
      <p>Choose Your Location</p>
    </section>
  );
};

export default Section1;
