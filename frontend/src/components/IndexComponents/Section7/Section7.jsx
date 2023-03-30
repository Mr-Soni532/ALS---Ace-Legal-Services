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
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf1.png"
          text="Welfare"
          description="Helping People Morally and Emotionally"
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf2.png"
          text="Consultations"
          description="Connecting with people for advice"
        />
        <SupportCard
          imagesrc="Images/IndexPageImages/Section7/welf4.png"
          text="Constitutional Rights"
          description="Basic Rights and Litigations of People"
        />
      </div>
    </div>
  );
};

export default Section7;
