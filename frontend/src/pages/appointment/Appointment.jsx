import React from "react";
import AppointmentForm from "../../components/appointment_form/Appointment_form";
import "./appointment.styles.css";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import { Space } from "antd";
const Appointment = () => {
  return (
    <>
      <DashNavbar />
      <Space style={{ border: "1px solid wheat" }}>
        <div className="parentlayout">
          <div className="AppointmentFormContainer">
            <div className="col-1">
              <img src="Images/lawyervertor2.jpg" alt="" />
              <p style={{ fontSize: "20px" }}>
                Book your appointment with the lawyer
              </p>
            </div>

            <div className="col-2">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </Space>
    </>
  );
};

export default Appointment;
