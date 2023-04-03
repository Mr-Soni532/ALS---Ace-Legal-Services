import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./otppage.css";
import HOST from "../../utils/baseUrl";
const OtpPage = () => {
  const navigate = useNavigate()
  // let [otp, setOtp] = useState("");
  let [one, setOne] = useState("");
  let [two, setTwo] = useState("");
  let [three, setThree] = useState("");
  let [four, setFour] = useState("");

  let userId=localStorage.getItem("otp_userId");
  const handleSubmit = (event) => {
    event.preventDefault();
    let formOTP = one + two + three + four;
    let data = {
      otp:formOTP,
      userId
    };

    verifyOTP(data);
    // alert("hi");
  };
  const verifyOTP = async (data) => {
    const response = await fetch(`${HOST}/user/verifyOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.status === "VERIFIED") {
      alert(json.msg);
      navigate('/login')
    } else {
      alert(json.msg);
    }
  };

  return (
    <div className="OTPPAGE">
      <Link to="/">
        <img className="Aclabsolute" src="Images/ACEyellow.png" alt="acelogo" />
      </Link>
      <form className="otpform" onSubmit={(event) => handleSubmit(event)}>
        <div className="info">
          <span className="otptitle">OTP Verification</span>
          <p className="otpdescription">
            Please enter the code we have sent you.{" "}
          </p>
        </div>
        <div className="otpinputs">
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            onChange={(event) => {
              setOne(event.target.value);
            }}
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            onChange={(event) => {
              setTwo(event.target.value);
            }}
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            onChange={(event) => {
              setThree(event.target.value);
            }}
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            onChange={(event) => {
              setFour(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="otpvalidate">Verify</button>
        {/* <p className="resend">You don't receive the code ?<a className="resend-action">resend</a></p> */}
      </form>
    </div>
  );
};

export default OtpPage;
