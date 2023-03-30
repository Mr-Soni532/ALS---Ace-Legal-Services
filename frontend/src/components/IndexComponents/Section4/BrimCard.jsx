import React from "react";
import "./Section4.css";

const BrimCard = ({ number, imgsrc, text }) => {
  return (
    <div className="BrimCard">
      <div className="YellowImg">
        <img style={{ width: "50px" }} src={`${imgsrc}`} alt="abcd" />
      </div>
      <div className="Sec4Brorn">
        <h1 className="SecFourBigTexts">{number}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BrimCard;
