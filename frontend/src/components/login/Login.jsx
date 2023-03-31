import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("User Email");
  const [imgpath, setImgPath] = useState("Images/Signup/avatar.png");
  const navigate = useNavigate();
  const handleClick = (str) => {
    setValue(str);
    if (str === "User Email") setImgPath("Images/Signup/avatar.png");
    else if (str === "Lawyer ID") setImgPath("Images/Signup/lawyerpng.jpg");
    else setImgPath("Images/Signup/adminpng.png");
  };
  const handleSubmit = (check) => {
    if (check === "User Email") {
      console.log("user request....");
      navigate("/login");
    } else if (check === "Lawyer ID") {
      console.log("lawyer request....");
    } else {
      console.log("admin request....");
    }
  };
  return (
    <div className="form-container">
      <p className="logintitle">Login</p>
      <div className="labeldiv">
        <label
          onClick={() => handleClick("User Email")}
          style={{
            backgroundColor: value !== "User Email" ? "#fafafa" : "#ffd41f",
            border: "none",
          }}
        >
          User
        </label>
        <label
          onClick={() => handleClick("Lawyer ID")}
          style={{
            backgroundColor: value !== "Lawyer ID" ? "#fafafa" : "#ffd41f",
            border: "none",
          }}
        >
          Lawyer
        </label>
        <label
          onClick={() => handleClick("Admin ID")}
          style={{
            backgroundColor: value !== "Admin ID" ? "#fafafa" : "#ffd41f",
            border: "none",
          }}
        >
          Admin
        </label>
      </div>
      <div className="userpng">
        <img src={imgpath} alt="" />
      </div>
      <div>
        <form className="form" onSubmit={() => handleSubmit(value)}>
          <div className="input-group">
            <label for="username" className="fontweightfive">
              {value}
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              required
            />
          </div>
          <div className="input-group">
            <label for="password" className="fontweightfive">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <div className="forgot">
              <Link rel="noopener noreferrer" className="yellohover" to="/">
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button className="signInBtn" type="submit">
            Sign in
          </button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
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
        <p className="signup">
          Don't have an account?
          <Link to="/signup" style={{ color: "blue" }}>
            &nbsp; Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
