import React from "react";
import "./Section4.css";

const BrimCard = ({ number, imgsrc, text, delay }) => {
  return (
    <div className="BrimCard" data-aos="fade-right" data-aos-delay={delay}>
      <div className="YellowImg">
        <img src={imgsrc} style={{ width: "50px" }} alt="abcd" />
      </div>
      <div className="Sec4Brorn">
        <h1 className="SecFourBigTexts">{number}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BrimCard;
