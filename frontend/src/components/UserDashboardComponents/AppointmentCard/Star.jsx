import React from "react";

const Star = ({ size, trans }) => {
  return (
    <img
      style={{ width: `${size}px`, transform: `translateY( ${trans}px)` }}
      src="Images/DashboardImages/star.svg"
      alt="star"
    ></img>
  );
};

export default Star;
