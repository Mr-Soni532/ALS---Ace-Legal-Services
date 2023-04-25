import React, { useContext, useEffect, useState } from "react";
import Calander from "../../components/slots/Calander";
import SlotBtn from "../../components/slots/SlotBtn";
import { AppointmentContext } from "../../context/appointment/appointmentContext";
import "./bookSlot.style.css";
import DashNavbar from "../../components/UserDashboardComponents/DashNavbar/DashNavbar";
import { Breadcrumb, Space } from "antd";
import Stepss from "./Progress";
import HOST from "../../utils/baseUrl";

const BookSlot = () => {
  const context = useContext(AppointmentContext);
  const { setDetails } = context;
  const [inputDate, setInputDate] = useState("");
  const [appointmentData, setAppoitmentData] = useState([]);
  const [availableSlot, setAvailableSlot] = useState([
    false,
    false,
    false,
    false,
  ]);
  const lawyerData = JSON.parse(localStorage.getItem("lawyerData"));

  async function updateDate(date) {
    await setInputDate(date);
    let res = await fetch(
      `${HOST}/appointment/fetch/lawyerEmail?email=${lawyerData.email}`
    );
    let data = await res.json();
    setAppoitmentData(data.data);
  }

  useEffect(() => {
    if (inputDate !== "" && appointmentData !== [])
      getAvailableSlots(appointmentData);
  }, [inputDate, appointmentData]);

  function getAvailableSlots(appointmentData) {
    // console.log(appointmentData, inputDate)
    let selectedDate = inputDate.split("-").map(Number); //YYYY-MM-DD
    // console.log(selectedDate)
    let appointmentByYear = appointmentData.filter(
      (el) => el.appointment_date.year === selectedDate[0]
    );
    // console.log(appointmentByYear)
    let appointmentByMonth = appointmentByYear.filter(
      (el) => el.appointment_date.month === selectedDate[1]
    );
    // console.log(appointmentByMonth,selectedDate[2])
    let appointmentByDay = appointmentByMonth.filter(
      (el) => el.appointment_date.day === selectedDate[2]
    );
    let newArr = new Array(4).fill(true);
    appointmentByDay.forEach((el) => {
      newArr[el.slot - 1] = false;
    });
    setAvailableSlot(newArr);
  }

  // updating the appointment context
  useEffect(() => {
    setDetails((prev) => ({
      ...prev,
      ...{ date: inputDate },
    }));
  }, [inputDate, setDetails]);

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
