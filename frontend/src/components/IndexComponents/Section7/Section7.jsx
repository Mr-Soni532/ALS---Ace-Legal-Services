import React from "react";
import "./Section7.css";
import SupportCard from "./SupportCard";
const Section7 = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">Guided Help and Support</h1>
      <br />
      <br />
      <div className="YellowBudsParent">
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf3.png"
          text="Law & Order"
          description="Teaching about basic Laws & Orders"
          delay={50}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf1.png"
          text="Welfare"
          description="Helping People Morally and Emotionally"
          delay={100}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf2.png"
          text="Consultations"
          description="Connecting with people for advice"
          delay={150}
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf4.png"
          text="Constitutional Rights"
          description="Basic Rights and Litigations of People"
          delay={250}
        />
      </div>
    </div>
  );
};

export default Section7;
