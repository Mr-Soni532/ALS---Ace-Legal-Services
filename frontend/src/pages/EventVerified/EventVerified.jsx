import React, { useContext } from "react";
import "./EventVerified.css";
import { Link, useNavigate } from "react-router-dom";
import { AppointmentContext } from "../../context/appointment/appointmentContext";
import HOST from "../../utils/baseUrl";

const EventVerified = () => {

  const navigate = useNavigate()
  const context = useContext(AppointmentContext);
  const { appointment_detials } = context;
  let cloneDate = appointment_detials.date;
  console.log(appointment_detials.date,cloneDate)
  let newDateArr = cloneDate.split("-").map(Number)
  const lawyerData = JSON.parse(localStorage.getItem('lawyerData'))
  async function handleBook() {
    console.log("inside handle book")
    let res = await fetch(`${HOST}/user/addAppointment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        lawyerEmail: lawyerData.email,
        userEmail: appointment_detials.email,
        appointment_date: {
          date: appointment_detials.date,
          year: newDateArr[0],
          month: newDateArr[1],
          day: newDateArr[2],
        },
        appointmentTime: appointment_detials.time,
        meeting_type: appointment_detials.type,
        slot: appointment_detials.appointmentSlot
      })
    })
    if(res.ok){
      navigate('/successBooking')
    } else{
      navigate('/failedBooking')
    }
  }
  function handlePayment() {
    // Pending
  }

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
              <h3 className="advoName">Adv. {lawyerData.name}</h3>

              <div className="eventMeetingDetails">
                <p>Meeting Time : {appointment_detials.time}</p>
                <p>Meeting Date : {appointment_detials.date}</p>
             
                <p>Lawyer Contact : {lawyerData.email} </p>
                <p>Payment Fee : {lawyerData.price} </p>
              </div>
            </div>

            <div>
              <div className="AdvoPng">
                <img
                  style={{ width: "100px" }}
                  src={lawyerData.image || "Images/avatar.png"}
                  alt=""
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="AdvoBio">Payment will be recieved via online banking</p>

          <div>
            <div className="faaspace"></div>
            <button className="signInBtn" onClick={handlePayment}>Proceed to Fee Payment</button>
            <br />
            <button className="BookAppBtntwo" onClick={handleBook}>Book an Appoinetment</button>
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
