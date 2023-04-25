import React, { useContext, useEffect, useState } from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./AppointmentsArea.css";
import HOST from "../../../utils/baseUrl";
import { Empty } from "antd";
import { UserContext } from "../../../context/Admin_page/userFunction/userState";
const AppointmentsArea = () => {
  const [appointment, setAppointment] = useState([]);
  const { UserDetails, setUserDetails } = useContext(UserContext);

  useEffect(() => {
    const userEmail = UserDetails.email;
    fetch(`${HOST}/appointment/fetch/userEmail?email=${userEmail}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("Appointments :", data.data);
        setAppointment(data.data);
      });
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
            <div key={index}>
              <AppointmentCard data={el} index={index} key={index} /> <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default AppointmentsArea;
