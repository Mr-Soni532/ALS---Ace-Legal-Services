import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotModal from "./ForgotModal";
import HOST from "../../utils/baseUrl.js";

import { notification } from "antd";
import { UserContext } from "../../context/Admin_page/userFunction/userState";
import { AuthContext } from "../../context/AuthContext/AuthState";

const Login = () => {
  const { UserDetails, setUserDetails } = useContext(UserContext);
  const { Auth, setAuth } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification();

  const FopenNotification = (msg, desc) => {
    api.info({
      message: msg,
      description: desc,
      placement: "top",
    });
  };
  const SopenNotification = (msg, desc) => {
    api.success({
      message: msg,
      description: desc,
      placement: "top",
    });
  };

  const [value, setValue] = useState("User Email");
  const [imgpath, setImgPath] = useState("Images/Signup/avatar.png");
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (str) => {
    setValue(str);
    if (str === "User Email") setImgPath("Images/Signup/avatar.png");
    else if (str === "Lawyer ID") setImgPath("Images/Signup/lawyerpng.jpg");
    else setImgPath("Images/Signup/adminpng.png");
  };
  const signIN = async (data) => {
    const response = await fetch(`${HOST}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    const Data = await response.json();
    if (Data.status === "success") {
      localStorage.setItem("token", Data.token);
      setUserDetails(Data.userData);
      SopenNotification("Login Success", "Succcessfully logged in.");
      setAuth(true);
      setTimeout(() => {
        setAuth(true);
        console.log("Login Success");
        navigate("/userdashboard");
      }, 1000);
    } else {
      FopenNotification("Invalid Credentials", "Enter valid account details.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "User Email") {
      let data = {
        email,
        password,
      };
      signIN(data);
    } else if (value === "Lawyer ID") {
      console.log("Hello from lawyer");
    } else {
      if (email === "admin@gmail.com" && password === "admin") {
        SopenNotification("Welcome Back Admin.", "Succcessfully logged in.");
        setAuth(true);
        navigate("/admin");
      }
    }
  };
  const google = () => {
    localStorage.clear();
    window.open(`${HOST}/auth/google`, "_self");
  };
  return (
    <div className="form-container">
      {contextHolder}
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
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
          <div className="input-group">
            <label htmlFor="username" className="fontweightfive">
              {value}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="fontweightfive">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />

            <div className="forgot">
              <div rel="noopener noreferrer" className="yellohover">
                <ForgotModal />
              </div>
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
          <div onClick={google}>
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
