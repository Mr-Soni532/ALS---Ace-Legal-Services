import React, { useEffect, useState } from "react";
import "./AppointmentCard.css";
import ApoBtns from "./ApoBtns";
import Star from "./Star";
import HOST from "../../../utils/baseUrl";

const AppointmentCard = ({
  data,
  index,
  notification,
  fnotification,
  RenderAgain,
}) => {
  const [lawyerDetails, setLawyerDetails] = useState({});

  function GetLaywerByEmail() {
    fetch(`${HOST}/lawyer/searchLawyerByEmail?email=${data.lawyerEmail}`)
      .then((data) => data.json())
      .then((data) => setLawyerDetails(data.data[0]));
  }
  useEffect(() => {
    GetLaywerByEmail();
  }, [data]);

  async function DeleteAppointment(id) {
    if (!id) return;
    try {
      let res = await fetch(`${HOST}/user/deleteAppointment`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ DeleteId: id }),
      });
      let data = await res.json();
      if (data.success) {
        notification(
          "Appointment Cancelled",
          "Succcessfully cancelled the appointment"
        );
        RenderAgain();
      }
    } catch (error) {
      fnotification(
        "Appointment Cancel Unsuccessful",
        "Cancelling appointment unsuccessful"
      );
      RenderAgain();
      console.log(error);
    }
  }

  let starArr = new Array(lawyerDetails.rating).fill([]);
  return (
    <div
      className="BigAPCARD"
      data-aos="fade-down"
      data-aos-delay="50"
      key={index}
    >
      <div className="AppointmentCard">
        <div className="Yelowbar"></div>
        <div className="AppRightLOL">
          <div>
            <h1>
              {lawyerDetails.name}
              {` `}
              <img
                style={{ width: "35px", transform: "translateY(8px)" }}
                src="Images/DashBoardImages/Yellowpog.png"
                alt="yello"
              />
            </h1>
            <p style={{ color: "#675f5f" }}>
              {`(Associate Attorney) -`}
              {starArr.map((el, index) => {
                return <Star size={20} trans={3} key={index + "asd231"} />;
              })}
            </p>

            <p className="AdvThings">Meeting time - {data.appointmentTime}</p>
            <p className="AdvThings">
              Meeting Date - {data.appointment_date.date}
            </p>
            {/* <p className="AdvThings">Time Remainig - {data.appointmentTime}</p> */}
            <p
              className="AdvThings"
              style={{ color: "grey", fontSize: "12px" }}
            >
              Appointments are efficient when they are held with proper meeting
              hygiene standards. Meeting hygiene consists of organization and
              efficiency of conversation.{" "}
            </p>
            <br />
            <div>
              <ApoBtns
                deleteFn={DeleteAppointment}
                text={"Message"}
                icon={
                  <svg
                    className="opentabicon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z" />
                  </svg>
                }
              />
              <ApoBtns
                deleteFn={DeleteAppointment}
                text={"Reschedule"}
                icon={
                  <svg
                    className="opentabicon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M596.817 836Q556 836 528 807.817q-28-28.183-28-69T528.183 670q28.183-28 69-28T666 670.183q28 28.183 28 69T665.817 808q-28.183 28-69 28ZM180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z" />
                  </svg>
                }
              />
              <ApoBtns
                idd={data._id}
                deleteFn={DeleteAppointment}
                text={"Cancel Appointment"}
                icon={
                  <svg
                    className="opentabicon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="m381 838-43-43 100-99-100-99 43-43 99 100 99-100 43 43-100 99 100 99-43 43-99-100-99 100ZM180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z" />
                  </svg>
                }
              />
            </div>
          </div>
          <div>
            <svg
              style={{ cursor: "grab" }}
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 96 960 960"
              width="32"
            >
              <path d="M160 666v-60h640v60H160Zm0-120v-60h640v60H160Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 96 960 960"
              width="32"
            >
              <path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
