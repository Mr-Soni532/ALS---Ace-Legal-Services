import { createContext, useEffect } from "react";
import React, { useState } from "react";


const AppointmentContext = createContext();
export { AppointmentContext };
const AppointmentState = ({ children }) => {
  const [appointment_Details, setDetails] = useState({
    name: '',
    email: '',
    phone: 0,
    description: '',
    type: '',
    date: '',
    time: '',
    appointmentSlot: -1
  })
  useEffect(() => {
    console.log(appointment_Details);
  }, [appointment_Details])
  return (
    <AppointmentContext.Provider value={{ appointment_Details, setDetails }}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentState

