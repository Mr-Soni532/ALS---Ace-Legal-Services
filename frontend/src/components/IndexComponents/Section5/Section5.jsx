import React from "react";
import SecFiveLawyerCard from "./SecFiveLawyerCard";
import "./Section5.css";
const Section5 = () => {
  return (
    <section className="SecFiveParent">
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">Meet Top Rated Lawyers</h1>
      <br />
      <br />
      <div className="Sec5Parent">
        <SecFiveLawyerCard photo="../../../assets/IndexPageImages/Section3/toplaw2.png" />
        <SecFiveLawyerCard photo="../../../assets/IndexPageImages/Section3/toplaw2.png" />
        <SecFiveLawyerCard photo="../../../assets/IndexPageImages/Section3/toplaw2.png" />
        <SecFiveLawyerCard photo="../../../assets/IndexPageImages/Section3/toplaw2.png" />
      </div>
    </section>
  );
};

export default Section5;
