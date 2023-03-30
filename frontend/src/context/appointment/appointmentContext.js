import { Children, createContext, useEffect } from "react";
import React, { useState } from "react";


const AppointmentContext = createContext();
export{AppointmentContext};
const AppointmentState = ({children}) => {
    const [appointment_detials, setDetials] = useState({
        name:'',
        email:'',
        phone:0,
        description: '',
        type: '',
        date: '',
        time: ''
    })
    function updateAppointmentDetails(data){
        for(let key in data){
            // setDetials({...appointment_detials, [key] : data[key]})
            setDetials((prev)=>({
                ...prev, [key]:data[key]
            }))
            // console.log(appointment_detials)
        }
    }
    useEffect(() => {
      console.log(appointment_detials)
    }, [appointment_detials])
    
  return (
    <AppointmentContext.Provider value={{appointment_detials,updateAppointmentDetails}}>
        {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentState


