import React, { useContext, useEffect, useState } from "react";
import Calander from "../../components/slots/Calander";
import SlotBtn from "../../components/slots/SlotBtn";
import { AppointmentContext } from "../../context/appointment/appointmentContext";
import "./bookSlot.style.css";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import { Breadcrumb, Space } from "antd";
import Stepss from "./Progress";

const BookSlot = () => {
  const context = useContext(AppointmentContext);
  const { setDetials } = context;
  const [inputDate, setInputDate] = useState("");
  const [availableSlot, setAvailableSlot] = useState([
    true,
    false,
    true,
    false,
  ]);
  function updateDate(date) {
    setInputDate(date);
    setTimeout(() => {}, 0);
  }
  let appointmentData = [];
  function getAvailableSlots() {
    let selectedDate = inputDate.split("-").map(Number); //YYYY-MM-DD
    let appointmentByYear = appointmentData.filter(
      (el) => el.year === selectedDate[0]
    );
    let appointmentByMonth = appointmentByYear.filter(
      (el) => el.month === selectedDate[1]
    );
    let appointmentByDay = appointmentByMonth.filter(
      (el) => el.day === selectedDate[2]
    );
    let newArr = new Array(4).fill(true);
    appointmentByDay.forEach((el) => {
      newArr[el.slot - 1] = false;
    });
    setAvailableSlot(newArr);
  }

  // updating the appointment context
  useEffect(() => {
    setDetials((prev) => ({
      ...prev,
      ...{ date: inputDate },
    }));
  }, [inputDate, setDetials]);

  function api() {}
  api();

  return (
    <div>
      <DashNavbar />
      <hr /> <br />
      <div style={{ paddingLeft: "20px" }}>
        {" "}
        <Breadcrumb
          style={{}}
          items={[
            { title: "Home" },
            { title: "Dashboard" },
            { title: "Booking Slot" },
          ]}
        ></Breadcrumb>
      </div>
      <div className="StepsVo">
        <Space>
          <div className="Stepssics">
            {" "}
            <Stepss></Stepss>
          </div>
        </Space>
        <div className="slot_mainContainer">
          <div className="slot_col-1">
            <Calander updateDate={updateDate} />
          </div>
          <div className="slot_col-2">
            <span>Select Slot</span>
            <div className="slot_container">
              <SlotBtn time={"9:00 AM"} active={availableSlot[0]} slot={1} />
              <SlotBtn time={"11:00 AM"} active={availableSlot[1]} slot={2} />
              <SlotBtn time={"2:00 PM"} active={availableSlot[2]} slot={3} />
              <SlotBtn time={"4:00 PM"} active={availableSlot[3]} slot={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
