import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="UserProfileParent">
      <div className="UserProfileFirst">
        <div className="UserProfileLeft" data-aos="fade-right">
          <div className="UserAvatarCard">
            <div>
              <img
                style={{ width: "108px" }}
                src="Images/DashboardImages/avatar.png"
                alt="AvatarImage"
              />
            </div>
            <div>
              <h1>UserName</h1>
              <p>User@email.com</p>
              <p>Case: IRM</p>
            </div>
          </div>
          <p style={{ color: "grey", fontSize: "12px" }}>
            ACE is managed by a volunteer board of directors. <br /> We Welcome
            you to our Legal Services
          </p>
        </div>
        <div className="UserProfileRight" data-aos="fade-left">
          <Link to="/">
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
