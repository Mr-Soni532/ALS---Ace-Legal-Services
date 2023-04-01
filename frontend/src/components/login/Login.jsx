import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
    const response = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const json = await response.json();
    if (json.status === "success") {
      localStorage.setItem("token", json.token);
      alert(json.msg);
      navigate("/signup");
    } else {
      alert(json.msg);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "User Email") {
      let data = {
        email,
        password,
      };
      // console.log(name,password)
      //   console.log('user request....')
      signIN(data);
      // navigate("/login")
    } else if (value === "Lawyer ID") {
      // console.log()
      console.log("Hello from lawyer");
    } else {
      console.log("hello from admin");
    }
  };
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
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
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
          <div className="input-group">
            <label for="username" className="fontweightfive">
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
            <label for="password" className="fontweightfive">
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
          <div onClick={google}>
            <img
              style={{ width: "30px" }}
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="icon"
            />
            <label >Continue With Google</label>
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
