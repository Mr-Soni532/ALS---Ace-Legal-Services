import React, { useContext, useEffect, useState } from "react";
import "./EventVerified.css";
import { Link, useNavigate } from "react-router-dom";
import { AppointmentContext } from "../../context/appointment/appointmentContext";
import HOST from "../../utils/baseUrl";
import Loading from "../../components/AdminCompo/Loading";
import { AuthContext } from "../../context/AuthContext/AuthState";

const EventVerified = () => {
  const navigate = useNavigate();

  const { Auth, setAuth } = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const context = useContext(AppointmentContext);

  const { appointment_Details } = context;
  let cloneDate = appointment_Details.date;
  // console.log(appointment_Details.date, cloneDate);

  let newDateArr = cloneDate.split("-").map(Number);

  const lawyerData = JSON.parse(localStorage.getItem("lawyerData"));
  // if (!lawyerData) setloading(true);
  async function handleBook() {
    setloading(true);
    let res = await fetch(`${HOST}/user/addAppointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lawyerEmail: lawyerData.email,
        userEmail: appointment_Details.email,
        appointment_date: {
          date: appointment_Details.date,
          year: newDateArr[0],
          month: newDateArr[1],
          day: newDateArr[2],
        },
        appointmentTime: appointment_Details.time,
        meeting_type: appointment_Details.type,
        slot: appointment_Details.appointmentSlot,
      }),
    });
    if (res.ok) {
      navigate("/successBooking");
    } else {
      navigate("/failedBooking");
    }
  }
  function handlePayment() {
    //   // Pending
    console.log("Handle Payment Function");
  }

  useEffect(() => {
    setTimeout(() => {
      setAuth((prev) => {
        if (prev === false) {
          navigate("/unAuthenticated");
          return false;
        }
        return true;
      });
    }, 2000);
  }, [setAuth, navigate]);

  return !Auth ? (
    <Loading />
  ) : (
    <div className="EventVerified">
      {loading ? (
        <div className="reviewLoader">
          <img src="loadingOrange.gif" alt="loadingimg" />
          <h1>Please Wait...</h1>
        </div>
      ) : (
        ""
      )}
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
              <h3 className="advoName">
                Adv. {lawyerData?.name || "Albert Johnson"}
              </h3>

              <div className="eventMeetingDetails">
                <p>Meeting Time : {appointment_Details?.time || "7:00AM"}</p>
                <p>
                  Meeting Date : {appointment_Details?.date || "8th April 2023"}
                </p>

                <p>
                  Lawyer Contact : {lawyerData?.email || "LiamPatel@gmail.com"}{" "}
                </p>
                <p>Payment Fee : {lawyerData?.price || "$700"} </p>
              </div>
            </div>

            <div>
              <div className="AdvoPng">
                <img src={lawyerData.image || "Images/avatar.png"} alt="" />
              </div>
            </div>
          </div>

          <hr />
          <p className="AdvoBio">Payment will be recieved via online banking</p>

          <div>
            <div className="faaspace"></div>
            <button className="signInBtn" onClick={handlePayment}>
              Proceed to Fee Payment
            </button>
            <br />
            <button className="BookAppBtntwo" onClick={handleBook}>
              Book an Appoinetment
            </button>
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
