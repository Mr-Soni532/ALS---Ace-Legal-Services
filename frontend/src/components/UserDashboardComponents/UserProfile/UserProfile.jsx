import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { Link } from 'react-router-dom';
import HOST from "../../../utils/baseUrl";

const UserProfile = () => {
  let userData=JSON.parse(localStorage.getItem("userData"));

  const [email,setEmail]=useState("User Email");
  const [name,setName]=useState("User Name");
  const [image,setImg]=useState("");

  useEffect(() => {
    if(userData){
      setEmail(userData.email);
      setName(userData.name);
      setImg(userData.img);
      console.log(userData.img)
    }else{
      const getUser = () => {
        fetch(`${HOST}/auth/login/success`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },

        })
          .then((response) => {
            // console.log(response)
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            let email=resObject.user.email
            let name=resObject.user.name;
            let img = resObject.user.img;
            console.log(name,email,img)
            localStorage.setItem("userData",JSON.stringify({email,name,img}))
            setEmail(email)
            setName(name)
            setImg(img)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }

    
  }, []);
  return (
    <div className="UserProfileParent">
      <div className="UserProfileFirst">
        <div className="UserProfileLeft" data-aos="fade-right">
          <div className="UserAvatarCard">
            <div>
              <img
                style={{ width: "108px" }}
                src= {image || "Images/DashboardImages/avatar.png"}
                alt="AvatarImage"
              />
            </div>
            <div>
              <h1>{name}</h1>
              <p>{email}</p>
              <p>Case: IRM</p>
            </div>
          </div>
          <p style={{ color: "grey", fontSize: "12px" }}>
            ACE is managed by a volunteer board of directors. <br /> We Welcome
            you to our Legal Services
          </p>
        </div>
        <div className="UserProfileRight" data-aos="fade-left">
          <Link to="/lawyers">
            <button className="BigBAPBTN">Book an Appointment + </button>
          </Link>
        </div>
      </div>
      <center>
        {" "}
        <hr style={{ width: "80%" }} />
      </center>
      <div className="UserProfileSecond">
        <Link to="/">Home</Link>
        <Link to="/">Reminders</Link>
        <Link to="/">Calendar</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default UserProfile;
