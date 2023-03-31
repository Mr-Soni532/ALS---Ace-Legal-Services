import React from "react";
import SecFiveLawyerCard from "./SecFiveLawyerCard";
import "./Section5.css";
const Section5 = () => {
  return (
    <section className="SecFiveParent">
      <br />

      <h1 className="SectionHeads">Meet Top Rated Lawyers</h1>
      <br />

      <div className="Sec5Parent">
        <SecFiveLawyerCard
          Name="Albert Johnson"
          photo="Images/IndexPageImages/Section5/toplaw2.webp"
          delay="50"
        />
        <SecFiveLawyerCard
          Name="Carl Davin"
          photo="Images/IndexPageImages/Section5/toplaw4.webp"
          delay="100"
        />
        <SecFiveLawyerCard
          Name="Tyson Miller"
          photo="Images/IndexPageImages/Section5/toplaw3.webp"
          delay="150"
        />
        <SecFiveLawyerCard
          Name="Robert Larry"
          photo="Images/IndexPageImages/Section5/toplaw5.webp"
          delay="200"
        />
      </div>
    </section>
  );
};

export default Section5;
