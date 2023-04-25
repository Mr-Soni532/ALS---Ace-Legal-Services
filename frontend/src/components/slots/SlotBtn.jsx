import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentContext } from "../../context/appointment/appointmentContext";
import "./slotbtn.style.css";
const SlotBtn = ({ time, active, slot }) => {
  const navigate = useNavigate();
  const context = useContext(AppointmentContext);
  const { setDetails } = context;
  function handleClick(e) {
    setDetails((prev) => ({
      ...prev,
      ...{ time: e.target.innerText },
      appointmentSlot: slot,
    }));
    navigate("/appointmentReview");
  }
  return (
    <div className={`slot-btn ${!active && "inactive"}`} onClick={handleClick}>
      {time}
    </div>
  );
};

export default SlotBtn;
