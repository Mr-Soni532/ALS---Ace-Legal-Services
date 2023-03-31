import { createContext, useEffect } from "react";
import React, { useState } from "react";


const AppointmentContext = createContext();
export { AppointmentContext };
const AppointmentState = ({ children }) => {
  const [appointment_detials, setDetials] = useState({
    name: '',
    email: '',
    phone: 0,
    description: '',
    type: '',
    date: '',
    time: '',
    appointmentSlot:-1
  })
  useEffect(() => {
    console.log(appointment_detials)
  }, [appointment_detials])
  return (
    <AppointmentContext.Provider value={{ appointment_detials, setDetials }}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentState


