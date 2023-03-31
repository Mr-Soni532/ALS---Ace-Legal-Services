import React from "react";
import "./signupPage.css";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const redirectToVerifyForm = () => {
    console.log("redirectingto verify");
  };
  return (
    <div className="signUpdiv">
      <Link to="/">
        <img className="Aclabsolute" src="Images/ACEyellow.png" alt="acelogo" />
      </Link>
      <div>
        <form className="Signupform">
          <h1 className="RegisterTitle">Register</h1>
          <p style={{ color: "grey", fontSize: "13px" }}>
            Signup to Ace Legal Services
          </p>
          <input
            type="text"
            className="SignupUserName"
            placeholder="&nbsp;&nbsp;Username"
            required
          />
          <input
            type="email"
            className="SignupEmail"
            placeholder="&nbsp;&nbsp;Email"
            required
          />
          <input
            type="password"
            className="SignupPass"
            placeholder="&nbsp;&nbsp;Password"
            required
          />
          <input
            type="text"
            className="SignupGender"
            placeholder="&nbsp;&nbsp;Gender"
            required
          />
          <input
            type="number"
            className="SignupPhone"
            placeholder="&nbsp;&nbsp;Phone Number"
            required
          />

          <span className="alreadyacc">
            Already have an account ?
            <Link className="SignInSmol" to="/login">
              &nbsp; Sign in
            </Link>
          </span>
          <button onClick={redirectToVerifyForm} className="ContinueRegis">
            Continue
          </button>
          <div className="social-message">
            <div className="line">-</div>
            <p className="message">Login with social accounts</p>
            <div className="line">-</div>
          </div>
          <div className="SocialIcons">
            <div>
              <img
                style={{ width: "30px" }}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="icon"
              />
              <label>Continue With Google</label>
            </div>
            <div>
              <img
                style={{ width: "27px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png"
                alt="icon"
              />
              <label>Continue With Facebook</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
