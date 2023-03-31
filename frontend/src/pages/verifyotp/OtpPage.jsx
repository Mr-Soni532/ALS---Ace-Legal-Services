import React, {  useState } from 'react';
import {Navigate } from 'react-router-dom';

import "./otppage.css"
const OtpPage = () => {
  let [otp,setOtp]=useState("");
  let [one,setOne]=useState("");
  let [two,setTwo]=useState("");
  let [three,setThree]=useState("");
  let [four,setFour]=useState("");

  const verifyOTP = async (data) => {
		const response = await fetch("http://localhost:4000/user/verifyOTP", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({otp:data.otp})
		});
		const json = await response.json();
    console.log(json);
		if (json.status==="APPROVED") {
			alert(json.msg);
     Navigate("/login")
		}else{
      alert("Something went wrong")
    }
    console.log(data)
	}

  const handleSubmit = (event) => {
    event.preventDefault();
    let formOTP=one+two+three+four;
    setOtp(formOTP)
    let data={
      otp
    }
    // verifyOTP(data)
    alert("hi")
  }
  return (
    <div>
        <form className="otpform" onSubmit={(event) => handleSubmit(event)}>
  <div className="info">
  <span className="otptitle">OTP Verification</span>
<p className="otpdescription">Please enter the code we have sent you. </p>
   </div>
    <div className="otpinputs">
    <input placeholder="" type="tel" maxlength="1" onChange={(event) => {
          setOne(event.target.value)}}/>
    <input placeholder="" type="tel" maxlength="1" onChange={(event) => {
          setTwo(event.target.value)}}/>
    <input placeholder="" type="tel" maxlength="1" onChange={(event) => {
          setThree(event.target.value)}}/>
    <input placeholder="" type="tel" maxlength="1" onChange={(event) => {
          setFour(event.target.value)}}/>
  </div>
        <a className="otpvalidate" href="#">Verify</a>
{/* <p className="resend">You don't receive the code ?<a className="resend-action">resend</a></p> */}

</form>
    </div>
  )
}

export default OtpPage