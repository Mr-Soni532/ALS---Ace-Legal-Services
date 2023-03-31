import React from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./AppointmentsArea.css";

const AppointmentsArea = () => {
  return (
    <div className="AppointmentsArea">
      <h2>Upcoming Appointments</h2>
      <p>
        <i>Here Are Your Upcoming Meetings : </i>
      </p>
      <br />
      <AppointmentCard />
      <br />
      <AppointmentCard />
    </div>
  );
};

export default AppointmentsArea;
