import React from "react";
import "./Section2.css";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  let navigate = useNavigate();
  let redirect = () => {
    navigate("/lawyers");
  };

  return (
    <section className="SecTwoParent">
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">
        Seach for best lawyers in your Proximity.
      </h1>
      <br />
      <input
        onClick={redirect}
        className="BigSearchBar"
        type="text"
        placeholder="Select Your City"
      />
      <SearchOutlined
        style={{
          fontSize: "22px",
          color: "grey",
          transform: "translateX(-50px) ",
        }}
      />
      <br />
      <p style={{ marginTop: "2px" }}>
        Choose Your Location{" "}
        <span>
          <svg
            className="opentabicon"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 96 960 960"
            width="18"
          >
            <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
          </svg>
        </span>
      </p>
    </section>
  );
};

export default Section2;
