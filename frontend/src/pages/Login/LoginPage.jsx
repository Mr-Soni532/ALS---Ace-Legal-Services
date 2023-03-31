import React from "react";
import Login from "../../components/login/Login";
import "./login.css";
const LoginPage = () => {
  return (
    <div className="loginpage">
      <div>
        <img className="Aclabsolute" src="Images/ACEyellow.png" alt="acelogo" />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
