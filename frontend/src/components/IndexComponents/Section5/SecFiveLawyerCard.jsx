import React from "react";

const SecFiveLawyerCard = ({ photo, Name, delay }) => {
  return (
    <div
      className="SecFiveLawyerCard"
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      <div className="YellowBorderImgs">
        <div className="YeloBarSec5"></div>
        <img style={{ width: "100%" }} src={`${photo}`} alt="" />
      </div>
      <h1>Adv.{Name}</h1>
      <button className="CheckoutProfile">
        Checkout Profile
        <svg
          className="opentabicon"
          xmlns="http://www.w3.org/2000/svg"
          height="17"
          viewBox="0 96 960 960"
          width="17"
        >
          <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
        </svg>
      </button>
    </div>
  );
};

export default SecFiveLawyerCard;
