import React from "react";

const NumBumCard = ({ number, head, text, delay }) => {
  return (
    <div className="NumBum" data-aos="fade-left" data-aos-delay={delay}>
      <div className="NubBumBar"></div>
      <div>
        <h1 className="numbumnumber">{number}+</h1>
        <h3>{head}</h3>
        <p style={{ color: "wheat" }}>{text}</p>
      </div>
    </div>
  );
};

export default NumBumCard;
