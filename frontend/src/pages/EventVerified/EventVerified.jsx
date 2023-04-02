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
            Appointment Review &nbsp;
            <img
              className="tick"
              style={{ filter: "saturate(2) hue-rotate(20deg)" }}
              src="Images/infopng.png"
              alt="Tick"
            />
          </p>
          <hr />
          <div className="eventtwo">
            <div>
              <h3 className="advoName">Adv.Harison Johnson</h3>

              <div className="eventMeetingDetails">
                <p>Meeting Time : 12 baje</p>
                <p>Meeting Date : 87-54-6512</p>
                <p>Remaining Time: 5days </p>
                <p>Lawyer Contact : 9302338475 </p>
                <p>Payment Fee : $ -lawyerfeehere- </p>
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

          <hr />
          <p className="AdvoBio">Payment will be recieved via online banking</p>

          <div>
            <div className="faaspace"></div>
            <button className="signInBtn">Proceed to Fee Payment</button>
            <br />
            <button className="BookAppBtntwo">Book an Appoinetment</button>
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
