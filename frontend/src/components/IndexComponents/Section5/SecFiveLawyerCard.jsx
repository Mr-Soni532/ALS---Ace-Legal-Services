import React from "react";

const SecFiveLawyerCard = ({ photo }) => {
  return (
    <div className="SecFiveLawyerCard">
      <img style={{ width: "100%" }} src={require(photo)} alt="" />
      <h1>Adv.Johnson</h1>
      <button>Checkout Profile</button>
    </div>
  );
};

export default SecFiveLawyerCard;
