import React, { useContext, useEffect, useState } from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./AppointmentsArea.css";
import HOST from "../../../utils/baseUrl";
import { Empty } from "antd";
import { UserContext } from "../../../context/Admin_page/userFunction/userState";
const AppointmentsArea = ({ notification, fnotification }) => {
  const [appointment, setAppointment] = useState([]);
  const { UserDetails } = useContext(UserContext);

  async function GetAppointments() {
    const userEmail = UserDetails.email;
    fetch(`${HOST}/appointment/fetch/userEmail?email=${userEmail}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("Appointments :", data.data);
        setAppointment(data.data);
      });
  }
  useEffect(() => {
    GetAppointments();
  }, []);

  return (
    <div className="AppointmentsArea">
      <h2>Upcoming Appointments</h2>
      <p>
        <i>Here Are Your Upcoming Meetings : </i>
      </p>
      <br />
      {appointment?.length === 0 ? (
        <Empty />
      ) : (
        appointment.map((el, index) => {
          return (
            <div key={index + "yuiop"}>
              <AppointmentCard
                notification={notification}
                fnotification={fnotification}
                RenderAgain={GetAppointments}
                data={el}
                index={index}
                key={index}
              />
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default AppointmentsArea;
