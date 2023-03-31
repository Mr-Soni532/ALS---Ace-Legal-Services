import React from 'react'
import "./otppage.css"
const OtpPage = () => {
  return (
    <div>
        <form className="otpform">
  <div className="info">
  <span className="otptitle">OTP Verification</span>
<p className="otpdescription">Please enter the code we have sent you. </p>
   </div>
    <div className="otpinputs">
    <input placeholder="" type="tel" maxlength="1" />
    <input placeholder="" type="tel" maxlength="1" />
    <input placeholder="" type="tel" maxlength="1" />
    <input placeholder="" type="tel" maxlength="1" />
  </div>
        <a className="otpvalidate" href="#">Verify</a>
{/* <p className="resend">You don't receive the code ?<a className="resend-action">resend</a></p> */}

</form>
    </div>
  )
}

export default OtpPage