import React from "react";
import "./EventVerified.css";
import { Link } from "react-router-dom";
const EventVerified = () => {
  return (
    <div className="EventVerified">
      <div>
        <Link to="/">
          <img
            className="Aclabsolute"
            src="Images/ACEyellow.png"
            alt="acelogo"
          />
        </Link>

        <div className="EventVerifiedCard">
          <p className="appverified">
            Appointment Verified &nbsp;
            <img className="tick" src="Images/verified.png" alt="Tick" />
          </p>
          <hr />
          <div className="eventtwo">
            <div>
              <h3 className="advoName">Adv.Harison Johnson</h3>

              <div className="eventMeetingDetails">
                <p>Meeting Time : 12 baje</p>
                <p>Meeting Date : 87-54-6512</p>
                <p>Remaining Time: 5days </p>
                <p>Lawyer Contact :+ 9302338475 </p>
              </div>
            </div>

            <div>
              <div className="AdvoPng">
                <img
                  style={{ width: "100px" }}
                  src="Images/avatar.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="AboutTheAdvo">About the Lawyer</p>

          <hr style={{ width: "60%" }} />
          <p className="AdvoBio">
            John Smith is a personal injury lawyer with over 10 years of
            experience helping clients get the compensation they deserve. He is
            passionate about justice and fighting for the rights of his clients
          </p>
          <hr />
          <div>
            <br />
            <label className="sendRem">
              <input type="checkbox" /> Send Reminder of Meet 1 Day Before
            </label>

            <div className="faaspace"></div>
            <button className="signInBtn">Proceed to Fee Payment</button>
            <label className="allrightIEIEIEIIEEI">
              © All Copyrights reserved
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVerified;
